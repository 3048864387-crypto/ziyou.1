"use client";

import { useEffect, useState } from "react";

type SampleVideo = {
  id: string;
  title: string;
  description: string;
  src: string | null;
};

type SampleCategory = {
  id: string;
  title: string;
  eyebrow: string;
  description: string;
  videos: SampleVideo[];
};

const sampleVideo = (id: string, title: string, description: string, src: string): SampleVideo => ({
  id,
  title,
  description,
  src,
});

const unsplash = (id: string) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1800&q=84`;

const heroSlides = [
  { src: unsplash("1529139574466-a303027c1d8b"), label: "品牌电影", en: "CINEMATIC BRAND", alt: "自由视界AI电影化品牌视觉" },
  { src: unsplash("1493238792000-8113da705763"), label: "餐饮空间", en: "DINING EXPERIENCE", alt: "高端餐厅AIGC商业视觉" },
  { src: unsplash("1601918774946-25832a4be0d6"), label: "文旅民宿", en: "BOUTIQUE RETREAT", alt: "高端民宿AIGC商业视觉" },
  { src: unsplash("1517248135467-4c7edcad34c4"), label: "餐饮空间", en: "DINING EXPERIENCE", alt: "现代高级餐厅空间" },
  { src: unsplash("1552566626-52f8b828add9"), label: "餐饮空间", en: "DINING EXPERIENCE", alt: "精致餐饮商业空间" },
  { src: unsplash("1515003197210-e0cd71810b5f"), label: "餐饮空间", en: "DINING EXPERIENCE", alt: "高端餐厅氛围视觉" },
  { src: unsplash("1550966871-3ed3cdb5ed0c"), label: "餐饮空间", en: "DINING EXPERIENCE", alt: "现代餐厅室内设计" },
  { src: unsplash("1414235077428-338989a2e8c0"), label: "餐饮美学", en: "CULINARY STORY", alt: "精致餐饮体验画面" },
  { src: unsplash("1547592180-85f173990554"), label: "餐饮美学", en: "CULINARY STORY", alt: "高级餐桌与空间" },
  { src: unsplash("1555396273-367ea4eb4db5"), label: "餐饮美学", en: "CULINARY STORY", alt: "餐饮品牌视觉" },
  { src: unsplash("1590846406792-0adc7f938f1d"), label: "餐饮空间", en: "DINING EXPERIENCE", alt: "精品餐厅商业视觉" },
  { src: unsplash("1592861956120-e524fc739696"), label: "餐饮空间", en: "DINING EXPERIENCE", alt: "现代餐厅品牌画面" },
  { src: unsplash("1600607687939-ce8a6c25118c"), label: "精品民宿", en: "BOUTIQUE RETREAT", alt: "高端民宿建筑空间" },
  { src: unsplash("1600607687920-4e2a09cf159d"), label: "精品民宿", en: "BOUTIQUE RETREAT", alt: "现代民宿室内空间" },
  { src: unsplash("1600566753190-17f0baa2a6c3"), label: "精品民宿", en: "BOUTIQUE RETREAT", alt: "民宿客房高级视觉" },
  { src: unsplash("1613490493576-7fde63acd811"), label: "度假空间", en: "HOSPITALITY FILM", alt: "高端度假建筑" },
  { src: unsplash("1600585154340-be6161a56a0c"), label: "度假空间", en: "HOSPITALITY FILM", alt: "现代度假别墅" },
  { src: unsplash("1600607688969-a5bfcd646154"), label: "精品民宿", en: "BOUTIQUE RETREAT", alt: "民宿空间设计" },
  { src: unsplash("1600210492486-724fe5c67fb0"), label: "度假空间", en: "HOSPITALITY FILM", alt: "高端室内度假空间" },
  { src: unsplash("1600566753086-00f18fb6b3ea"), label: "精品民宿", en: "BOUTIQUE RETREAT", alt: "民宿生活空间" },
  { src: unsplash("1600573472550-8090b5e0745e"), label: "精品民宿", en: "BOUTIQUE RETREAT", alt: "民宿室内商业视觉" },
  { src: unsplash("1600607688066-890987f18a86"), label: "度假空间", en: "HOSPITALITY FILM", alt: "高端旅居空间" },
  { src: unsplash("1523275335684-37898b6baf30"), label: "产品商业", en: "PRODUCT HERO", alt: "高端产品商业视觉" },
  { src: unsplash("1441986300917-64674bd600d8"), label: "产品商业", en: "PRODUCT HERO", alt: "精品产品广告画面" },
  { src: unsplash("1547887538-e3a2f32cb1cc"), label: "产品商业", en: "PRODUCT HERO", alt: "电影感产品视觉" },
  { src: unsplash("1512496015851-a90fb38ba796"), label: "美业视觉", en: "BEAUTY CAMPAIGN", alt: "高级美业品牌视觉" },
  { src: unsplash("1522335789203-aabd1fc54bc9"), label: "美业视觉", en: "BEAUTY CAMPAIGN", alt: "美业商业广告画面" },
  { src: unsplash("1560343090-f0409e92791a"), label: "建筑空间", en: "ARCHITECTURAL STORY", alt: "现代建筑品牌视觉" },
  { src: unsplash("1497366754035-f200968a6e72"), label: "商业空间", en: "SPATIAL IDENTITY", alt: "高级商业空间" },
  { src: unsplash("1494438639946-1ebd1d20bf85"), label: "空间美学", en: "SPATIAL IDENTITY", alt: "现代空间美学视觉" },
];

const coreServices = [
  {
    index: "01",
    title: "IP创意形象短剧",
    en: "IP SHORT DRAMA",
    description: "用固定人物、鲜明性格和独立剧情吸引观看，让商家不只获得一条视频，更能逐步形成可持续复用的内容IP。",
    points: ["流量选题与剧情钩子", "IP人物与视觉设定", "商家特色自然植入", "独立片段与系列短剧"],
  },
  {
    index: "02",
    title: "故事宣传片",
    en: "STORY PROMOTIONAL FILM",
    description: "以商家的真实环境、产品和服务为基础，通过完整顾客体验故事，讲清楚适合谁、有什么特色、为什么值得选择。",
    points: ["客群与卖点梳理", "顾客体验路线", "真实场景资产融合", "人物、场景与镜头设计"],
  },
  {
    index: "03",
    title: "电影既视感宣传片",
    en: "CINEMATIC BRAND FILM",
    description: "从品牌概念、导演方案到完整分镜与声音设计，用AIGC完成传统影视需要高成本制作才能呈现的电影化画面。",
    points: ["品牌概念与广告剧本", "导演级完整分镜", "复杂运镜与跨时空画面", "高一致性资产控制"],
  },
];

const expandedServices = [
  { number: "04", title: "产品宣传片", description: "围绕产品材质、结构、功能与使用场景，制作具有商业质感的产品广告与Hero镜头。" },
  { number: "05", title: "AI仿真人定制", description: "建立固定人物外形、年龄、服装、声音和表演风格，适合品牌长期内容与剧情拍摄。" },
  { number: "06", title: "AI漫剧", description: "制作二维、三维、写实漫改等不同风格的连续故事、品牌剧情和知识型内容。" },
  { number: "07", title: "AI数字人口播", description: "无需真人反复出镜，完成产品介绍、知识讲解、门店活动和标准化口播内容。" },
  { number: "08", title: "品牌IP形象设计", description: "从角色性格、视觉造型到固定场景和故事关系，建立具有长期识别度的品牌形象。" },
  { number: "09", title: "电商产品视觉", description: "覆盖产品主图、上新短片、场景化展示、节日营销和社交平台传播内容。" },
  { number: "10", title: "文旅与商家内容", description: "为民宿、餐饮、农家乐和本地生活商家制作真实可信、具有情绪价值的内容。" },
  { number: "11", title: "AI婚礼创意影像", description: "将人物故事、纪念场景和想象画面结合，制作婚礼开场、爱情故事与纪念短片。" },
  { number: "12", title: "专属视觉资产库", description: "沉淀人物、服装、场景、车辆、菜品、产品和声音资产，提高后续制作效率。" },
];

const sampleCategories: SampleCategory[] = [
  {
    id: "ip", title: "IP创意形象短剧", eyebrow: "CATEGORY 01", description: "固定人物 · 剧情反转 · 商家植入",
    videos: [],
  },
  {
    id: "story", title: "商家故事宣传片", eyebrow: "CATEGORY 02", description: "真实环境 · 顾客体验 · 服务故事",
    videos: [
      sampleVideo("story-1", "样片1", "商家故事宣传片", "https://ziyou-shijie-ai.cheery-kiwi-1225.chatgpt.site/samples/story-sample-1.mp4"),
    ],
  },
  {
    id: "cinematic", title: "电影既视感品牌片", eyebrow: "CATEGORY 03", description: "导演思维 · 电影化光影 · 高一致性",
    videos: [
      sampleVideo("cinematic-1", "样片1", "电影既视感品牌片", "https://ziyou-shijie-ai.cheery-kiwi-1225.chatgpt.site/samples/cinematic-sample-1.mp4"),
    ],
  },
  {
    id: "product", title: "产品宣传片", eyebrow: "CATEGORY 04", description: "产品细节 · 商业镜头 · 场景广告",
    videos: [
      sampleVideo("product-1", "样片1", "产品宣传片", "https://ziyou-shijie-ai.cheery-kiwi-1225.chatgpt.site/samples/product-sample-1.mp4"),
      sampleVideo("product-2", "样片2", "产品宣传片", "https://ziyou-shijie-ai.cheery-kiwi-1225.chatgpt.site/samples/product-sample-2.mp4"),
    ],
  },
  {
    id: "human", title: "AI仿真人", eyebrow: "CATEGORY 05", description: "固定形象 · 人物表演 · 长期复用",
    videos: [],
  },
  {
    id: "comic", title: "AI漫剧", eyebrow: "CATEGORY 06", description: "连续故事 · 风格化画面 · 系列内容",
    videos: []
  },
];

const workflow = [
  { step: "01", title: "了解需求", text: "确认宣传目的、目标顾客、视频时长、画面风格和重点内容。" },
  { step: "02", title: "创意策划", text: "梳理商家优势，确定故事方向、人物设定、剧本和分镜。" },
  { step: "03", title: "资产与制作", text: "建立人物、场景和产品资产，完成画面生成、配音、音效与剪辑。" },
  { step: "04", title: "审核交付", text: "提交初稿、统一反馈、按约定修改并交付高清无水印成片。" },
];

function PlayIcon({ size = 22 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m8 5 11 7-11 7V5Z" fill="currentColor"/></svg>;
}

function ArrowIcon({ size = 18 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>;
}

export default function CompanySite() {
  const [activeCategory, setActiveCategory] = useState<SampleCategory | null>(null);
  const [activeVideo, setActiveVideo] = useState<SampleVideo | null>(null);
  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    const rotation = window.setTimeout(() => {
      setHeroIndex(current => (current + 1) % heroSlides.length);
    }, 5200);
    return () => window.clearTimeout(rotation);
  }, [heroIndex]);

  useEffect(() => {
    const nextImage = new Image();
    nextImage.src = heroSlides[(heroIndex + 1) % heroSlides.length].src;
  }, [heroIndex]);

  const moveHero = (direction: number) => {
    setHeroIndex(current => (current + direction + heroSlides.length) % heroSlides.length);
  };

  useEffect(() => {
    if (!activeCategory) return;
    const close = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      if (activeVideo) setActiveVideo(null);
      else setActiveCategory(null);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", close);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", close);
    };
  }, [activeCategory, activeVideo]);

  const closeSamples = () => {
    setActiveVideo(null);
    setActiveCategory(null);
  };

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(".company-site .reveal"));
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    elements.forEach((element, index) => {
      element.style.setProperty("--reveal-delay", `${(index % 4) * 75}ms`);
      observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);

  return <div className="company-site">
    <header className="company-nav">
      <a className="company-brand" href="#top" aria-label="自由视界 AI 首页">
        <span className="company-brand-logo" aria-hidden="true">
          <img src="/scope-ai-logo-optimized.png" alt="" />
        </span>
        <span><strong>自由视界</strong><small>SCOPE AI</small></span>
      </a>
      <nav aria-label="公司官网导航">
        <a href="#about">关于我们</a>
        <a href="#services">服务内容</a>
        <a href="#samples">样片参考</a>
        <a href="#process">合作流程</a>
      </nav>
      <a className="company-studio-link" href="#studio">创作工作台 <ArrowIcon size={15}/></a>
    </header>

    <main id="top">
      <section className="company-hero">
        <div className="company-hero-copy">
          <p className="company-kicker"><span/> AIGC FILM & BRAND CONTENT</p>
          <h1>让商家的优势，<br/><em>成为观众愿意看完的故事。</em></h1>
          <p className="company-lead">自由视界 AI 以导演思维、编剧思维与AIGC制作能力，为商家和品牌提供从创意策划、人物资产到成片交付的完整影视内容服务。</p>
          <div className="company-hero-actions">
            <a className="company-primary" href="#services">查看服务内容 <ArrowIcon/></a>
            <a className="company-secondary" href="#samples"><span className="mini-play"><PlayIcon size={13}/></span> 样片参考</a>
          </div>
          <div className="company-hero-note"><span>真实商家负责可信</span><i/><span>AIGC负责故事、想象与规模</span></div>
        </div>
        <div className="company-hero-visual">
          <img key={heroSlides[heroIndex].src} className="hero-slide-image" src={heroSlides[heroIndex].src} alt={heroSlides[heroIndex].alt} onError={() => moveHero(1)} decoding="async"/>
          <div className="visual-index"><span>{heroSlides[heroIndex].en}</span><strong>{String(heroIndex + 1).padStart(2, "0")}</strong></div>
          <div className="visual-caption"><span>{heroSlides[heroIndex].label}</span><i>×</i><span>AI IMAGINATION</span></div>
          <div className="hero-slide-controls" aria-label="首页视觉切换">
            <button className="hero-slide-arrow" onClick={() => moveHero(-1)} aria-label="上一张视觉">←</button>
            <span className="hero-slide-count">{String(heroIndex + 1).padStart(2, "0")} / {heroSlides.length}</span>
            <span className="hero-slide-progress" key={heroIndex}><i/></span>
            <button className="hero-slide-arrow" onClick={() => moveHero(1)} aria-label="下一张视觉">→</button>
          </div>
        </div>
      </section>

      <section className="company-about" id="about">
        <div className="company-section-label"><span>01</span><strong>ABOUT SCOPE AI</strong></div>
        <div className="company-about-grid reveal">
          <div>
            <p className="company-kicker dark"><span/> 关于自由视界</p>
            <h2>不只是制作一条AI视频，<br/>而是把商家的特色变成内容资产。</h2>
          </div>
          <div className="company-about-copy">
            <p>自由视界 AI 是一家专注于AIGC影视创作与商家品牌传播的创意公司。我们从顾客需求出发，帮助商家找到真正值得传播的优势，再通过故事、人物和电影化视觉把这些优势呈现出来。</p>
            <p>我们不单纯出售AI工具，也不只是排列环境、菜品和产品画面。每一个项目都从“谁会看、为什么停留、最后记住什么”开始，让创意服务于真实经营和长期品牌积累。</p>
            <div className="company-positioning">
              <span>客群与差异化分析</span><span>故事与影视创意</span><span>品牌资产长期复用</span>
            </div>
          </div>
        </div>
        <div className="company-principles">
          <article className="reveal"><span>01</span><strong>先找到真实优势</strong><p>从顾客需求和消费场景出发，不虚构商家实际无法提供的产品与体验。</p></article>
          <article className="reveal"><span>02</span><strong>再把优势讲成故事</strong><p>用冲突、情绪、人物和场景，让宣传内容从“介绍”变成观众愿意看的作品。</p></article>
          <article className="reveal"><span>03</span><strong>最后沉淀长期资产</strong><p>固定人物、场景、产品和声音，让后续内容制作更稳定、更快速、更统一。</p></article>
        </div>
      </section>

      <section className="company-services" id="services">
        <div className="company-section-heading reveal">
          <div><div className="company-section-label light"><span>02</span><strong>CORE SERVICES</strong></div><h2>三类核心影视解决方案</h2></div>
          <p>从获得注意力，到讲清商家特色，再到建立长期品牌形象，不同内容承担不同任务。</p>
        </div>
        <div className="core-service-grid">
          {coreServices.map(service => <article className="core-service-card reveal" key={service.index}>
            <div className="core-card-top"><span>{service.index}</span><small>{service.en}</small></div>
            <h3>{service.title}</h3><p>{service.description}</p>
            <ul>{service.points.map(point => <li key={point}>{point}</li>)}</ul>
          </article>)}
        </div>
      </section>

      <section className="company-capabilities">
        <div className="company-section-heading dark-heading reveal">
          <div><div className="company-section-label"><span>03</span><strong>MORE CAPABILITIES</strong></div><h2>更多专项内容服务</h2></div>
          <p>根据品牌、产品和发布场景灵活组合，不把所有客户套进同一种视频模板。</p>
        </div>
        <div className="capability-grid">
          {expandedServices.map(service => <article className="reveal" key={service.number}>
            <span>{service.number}</span><h3>{service.title}</h3><p>{service.description}</p>
          </article>)}
        </div>
      </section>

      <section className="company-samples" id="samples">
        <div className="company-section-heading dark-heading reveal">
          <div><div className="company-section-label"><span>04</span><strong>SELECTED WORKS</strong></div><h2>样片参考</h2></div>
          <p>先选择作品分类，再查看该分类现有样片。新作品可以持续增加，点击单条作品即可播放和全屏观看。</p>
        </div>
        <div className="sample-grid">
          {sampleCategories.map((sample, index) => <button className={`sample-card sample-tone-${index + 1} reveal`} key={sample.id} onClick={() => setActiveCategory(sample)}>
            <span className="sample-eyebrow">{sample.eyebrow}</span>
            <span className="sample-play"><PlayIcon/></span>
            <span className="sample-copy"><strong>{sample.title}</strong><small>{sample.description}</small></span>
            <span className="sample-status">查看作品集</span>
          </button>)}
        </div>
      </section>

      <section className="company-process" id="process">
        <div className="company-section-heading dark-heading reveal">
          <div><div className="company-section-label"><span>05</span><strong>DELIVERY PROCESS</strong></div><h2>从需求到成片，每一步都先确认</h2></div>
          <p>用明确的确认节点和修改边界，减少返工，让商家和制作团队始终知道项目进行到哪一步。</p>
        </div>
        <div className="workflow-grid">
          {workflow.map(item => <article className="reveal" key={item.step}><span>{item.step}</span><div><h3>{item.title}</h3><p>{item.text}</p></div></article>)}
        </div>
      </section>

      <section className="company-end reveal">
        <p className="company-kicker"><span/> SCOPE AI · 自由视界</p>
        <h2>所想无界，所见成真。</h2>
        <p>真实商家负责可信，AIGC负责把创意带到传统拍摄难以抵达的地方。</p>
        <div><a className="company-primary" href="#services">了解服务内容 <ArrowIcon/></a><a className="company-secondary inverse" href="#samples">查看样片位置</a></div>
      </section>
    </main>

    <footer className="company-footer">
      <a className="company-brand footer-brand" href="#top"><span className="company-brand-mark">S</span><span><strong>自由视界</strong><small>SCOPE AI</small></span></a>
      <p>专注AIGC影视创作与商家品牌内容服务</p>
      <span>© 2026 SCOPE AI · 自由视界</span>
    </footer>

    {activeCategory && <div className="sample-modal" role="dialog" aria-modal="true" aria-label={activeCategory.title}>
      <button className="sample-modal-backdrop" aria-label="关闭样片列表" onClick={closeSamples}/>
      <div className={`sample-modal-panel ${activeVideo ? "is-player" : "is-gallery"}`}>
        <button className="sample-modal-close" onClick={closeSamples} aria-label="关闭">×</button>
        {activeVideo ? <>
          <button className="sample-modal-back" onClick={() => setActiveVideo(null)}><span>←</span> 返回{activeCategory.title}</button>
          <div className="sample-modal-media">
            {activeVideo.src ? <video src={activeVideo.src} controls autoPlay playsInline preload="metadata"/> : <div className="sample-empty"><span><PlayIcon size={30}/></span><strong>{activeVideo.title}</strong><p>播放器已经就绪，正式样片上传后即可在这里直接播放。</p></div>}
          </div>
          <div className="sample-modal-info"><span>{activeCategory.eyebrow}</span><strong>{activeVideo.title}</strong><p>{activeVideo.description}</p></div>
        </> : <>
          <div className="sample-gallery-head">
            <span>{activeCategory.eyebrow}</span>
            <h3>{activeCategory.title}</h3>
            <p>{activeCategory.description}</p>
            <small>作品持续更新</small>
          </div>
          {activeCategory.videos.length > 0 ? <div className="sample-gallery-grid">
            {activeCategory.videos.map((video, index) => <button className={`sample-work-card work-tone-${(index % 6) + 1}`} key={video.id} onClick={() => setActiveVideo(video)}>
              <span className="sample-work-index">{String(index + 1).padStart(2, "0")}</span>
              <span className="sample-work-play"><PlayIcon size={18}/></span>
              <span className="sample-work-copy"><strong>{video.title}</strong><small>点击播放</small></span>
            </button>)}
          </div> : <div className="sample-gallery-empty"><span><PlayIcon size={24}/></span><strong>作品持续更新</strong><p>这一分类的正式样片上线后会直接显示在这里。</p></div>}
        </>}
      </div>
    </div>}
  </div>;
}
