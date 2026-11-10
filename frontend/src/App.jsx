import { useEffect, useState } from 'react'
import { profile } from './data/profile.js'
import { products } from './data/products.js'
import { experiences } from './data/experiences.js'

function ImagePlaceholder({ src, alt, number }) {
  const [failed, setFailed] = useState(false)
  return <div className="image-frame">{!failed && <img src={src} alt={alt} onError={() => setFailed(true)} />}{failed && <span className="image-fallback">{number}</span>}</div>
}

function DetailsModal({ item, type, onClose }) {
  useEffect(() => { const close = event => event.key === 'Escape' && onClose(); window.addEventListener('keydown', close); return () => window.removeEventListener('keydown', close) }, [onClose])
  if (!item) return null
  const product = type === 'product'
  return <div className="modal-backdrop" role="presentation" onMouseDown={onClose}><section className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" onMouseDown={event => event.stopPropagation()}><button className="close" onClick={onClose} aria-label="關閉詳細資訊">×</button><ImagePlaceholder src={item.image} alt={item.name || item.title} number={String(item.id).padStart(2, '0')} /><div className="modal-content"><p className="card-tag">{product ? item.category : item.date}</p><h2 id="modal-title">{item.name || item.title}</h2><p>{product ? item.description : item.story}</p><dl><div><dt>{product ? '適合對象' : '相關成果'}</dt><dd>{product ? item.audience : item.result}</dd></div><div><dt>{product ? '價格／合作方式' : '日期／年份'}</dt><dd>{product ? item.price : item.date}</dd></div></dl><a className="button primary" href={`mailto:${profile.email}`}>{product ? '詢問商品' : '與我聯絡'} <span>↗</span></a></div></section></div>
}

function Navbar() { return <header className="site-header"><nav className="nav container"><a className="logo" href="#home">{profile.name}<span>.</span></a><div className="nav-links"><a href="#about">關於我</a><a href="#products">商品</a><a href="#experience">經歷</a><a href="#contact">聯絡</a></div><a className="nav-cta" href="#contact">一起聊聊 →</a></nav></header> }
function Hero() { return <section id="home" className="hero container"><div className="hero-copy"><p className="eyebrow">{profile.title.toUpperCase()} · CREATIVE LIFE</p><h1>把生活的靈感，<em>分享給你。</em></h1><p className="hero-text">我是{profile.name}，{profile.shortIntro}</p><div className="hero-actions"><a className="button primary" href="#products">查看商品 <span>↗</span></a><a className="text-link" href="#experience">認識我的經歷</a></div><div className="hero-note"><strong>01</strong><span>用喜歡的事，建立自己的風格。</span></div></div><div className="hero-visual"><div className="gradient-orb"/><div className="portrait-placeholder"><span>creative<br/>notes</span></div><div className="floating-card">✦ <span>made with<br/>intention</span></div></div></section> }
function About() { return <section id="about" className="section container about"><div className="section-label">01 / ABOUT ME</div><div><h2>溫柔地做事，<br/><em>認真地生活。</em></h2><p>{profile.about}</p><a className="arrow-link" href="#contact">更多關於我　↗</a></div></section> }
function SectionTitle({ label, title, emphasis, text }) { return <div className="section-heading"><div><div className="section-label">{label}</div><h2>{title}<br/><em>{emphasis}</em></h2></div><p>{text}</p></div> }
function Products({ onSelect }) { return <section id="products" className="section container"><SectionTitle label="02 / CURATED PRODUCTS" title="最近喜歡的" emphasis="生活選物" text="把實用、好看與一點點心意，放進每天的生活裡。"/><div className="card-grid">{products.map(product => <button className="card" key={product.id} onClick={() => onSelect(product)}><ImagePlaceholder src={product.image} alt={product.name} number={`0${product.id}`}/><div className="card-body"><p className="card-tag">{product.category}</p><h3>{product.name}</h3><p>{product.intro}</p><span>看更多　↗</span></div></button>)}</div></section> }
function Experiences({ onSelect }) { return <section id="experience" className="section container experience"><SectionTitle label="03 / MY JOURNEY" title="一路走來的" emphasis="一些風景" text="每一次嘗試，都讓我更靠近想成為的自己。"/><div className="experience-list">{experiences.map(item => <button className="experience-item" key={item.id} onClick={() => onSelect(item)}><span>{item.date}</span><div><h3>{item.title}</h3><p>{item.intro}</p></div><b>↗</b></button>)}</div></section> }
function Contact() { return <section id="contact" className="contact container"><p className="eyebrow">LET'S CONNECT</p><h2>有想法，<em>就來聊聊。</em></h2><p>如果你也喜歡有溫度的創作，歡迎和我分享你的故事。</p><a className="button dark" href={`mailto:${profile.email}`}>{profile.email}　↗</a><div className="socials">{profile.socialLinks.map(link => <a href={link.url} key={link.name} target="_blank" rel="noreferrer">{link.name}</a>)}</div></section> }
function Footer() { return <footer><p>© 2026 {profile.name}</p><p>Made with intention ✦</p></footer> }

export default function App() { const [selected, setSelected] = useState(null); const [type, setType] = useState('product'); const selectProduct = item => { setType('product'); setSelected(item) }; const selectExperience = item => { setType('experience'); setSelected(item) }; return <><Navbar/><main><Hero/><About/><Products onSelect={selectProduct}/><Experiences onSelect={selectExperience}/><Contact/></main><Footer/><DetailsModal item={selected} type={type} onClose={() => setSelected(null)}/></> }
