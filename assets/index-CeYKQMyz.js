(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`<section class="event container" aria-labelledby="event-title" id='event'>\r
  <div class="event__first-block">\r
      <h2 class="event__first-block_title even-title">\r
        Чтобы поддержать Международный васюкинский турнир \r
        <span class="event__first-block_mobile-slot"></span> \r
        посетите лекцию на\xA0тему:\r
        <span class='event__first-block_text-accent even-text-accent'>«Плодотворная дебютная идея»</span>\r
      </h2>\r
      \r
      <img data-da=".event__first-block_mobile-slot,first,768" class='event__first-block_img' src="assets/event/chess-tournament.png" alt="Иллюстрация шахматного турнира">\r
  </div>\r
  \r
  <div class='event__second-block'>\r
    <div class="event__second-block_art">\r
      <div class="event__second-block_scene scene-event" aria-hidden="true">\r
        <img src="assets/event/paper.png" class='scene-event__paper' alt="">\r
        <img src="assets/event/money.png" class='scene-event__money' alt="">\r
        <img src="assets/event/star-chess-player.svg"  class='scene-event__star-chess-player' alt="">\r
        <img src="assets/event/chess-player.png"   class='scene-event__chess-player' alt="">\r
        <img src="assets/event/star-horse.svg"   class='scene-event__star-horse' alt="">\r
        <img src="assets/event/hand.png" class='scene-event__hand' alt="">\r
        <img src="assets/event/horse.png" class='scene-event__horse' alt="">\r
      </div>\r
    </div>\r
  \r
    <div>\r
      <h3 class="event__second-block_title even-title">\r
        и Сеанс <span class='even-text-accent'>одновременной игры в\xA0шахматы на\xA0160\xA0досках</span> гроссмейстера О.\xA0Бендера\r
      </h3>\r
\r
      <dl class="event__second-block_info info-event">\r
        <div class="info-event__row">\r
          <dt>Место проведения:</dt>\r
          <dd>Клуб «Картонажник»</dd>\r
        </div>\r
\r
        <div class="info-event__row">\r
          <dt>Дата и\xA0время мероприятия:</dt>\r
          <dd>22\xA0июня 1927\xA0г. в\xA018:00</dd>\r
        </div>\r
\r
        <div class="info-event__row">\r
          <dt>Стоимость входных билетов:</dt>\r
          <dd>20\xA0коп.</dd>\r
        </div>\r
\r
        <div class="info-event__row">\r
          <dt>Плата за\xA0игру:</dt>\r
          <dd>50 коп.</dd>\r
        </div>\r
\r
        <div class="info-event__row">\r
          <dt>Взнос на телеграммы:</dt>\r
          <dd>\r
            <span class="old-price">100 руб.</span>\r
            <span>21 руб. 16\xA0коп.</span>\r
          </dd>\r
        </div>\r
      </dl>\r
\r
      <p class="event__second-block_note">\r
        По\xA0всем вопросам обращаться в\xA0администрацию к\xA0К.\xA0Михельсону\r
      </p>\r
    </div>\r
  </div>\r
</section>`,t=`<footer class="footer">\r
  <p class="footer__text">\r
    Все\xA0персонажи, события и\xA0цитаты являются вымышленными и\xA0не\xA0принадлежат создателям сайта. С\xA0подробностями можно познакомиться в\xA0главе XXXIV романа Ильи Ильфа и\xA0Евгения Петрова «Двенадцать стульев».\r
  </p>\r
</footer>`,n=`<header class="header">\r
  <div class="container header__container">\r
    <a href="/" class="header__logo">\r
      <img class='header__logo-img' src="assets/logo.svg" alt="Клуб четырёх коней" />\r
      <span class="header__logo-text">\r
        <span>Клуб</span>\r
        <span>четырёх коней</span>\r
      </span>\r
    </a>\r
  </div>\r
</header>`,r=`<section class="hero" aria-labelledby="hero-title">\r
	<div class="hero__scene scene-hero" aria-hidden="true">\r
		<img src="assets/hero/king.png" class="scene-hero__king" alt="" />\r
		<img src="assets/hero/queen.png" class="scene-hero__queen" alt="" />\r
    <img src="assets/hero/horse.png" class="scene-hero__horse" alt="" />\r
    <img src="assets/hero/pawn.png" class="scene-hero__pawn" alt="" />\r
		<img src="assets/hero/sun.svg" class="scene-hero__sun" alt="" />\r
		<img src="assets/hero/board.png" class="scene-hero__board" alt="" />\r
		<img src="assets/hero/city.png" class="scene-hero__city" alt="" />\r
	</div>\r
  \r
\r
	<div class="container">\r
    <div class="hero__content">\r
      <h1 class="hero__title">\r
				<span class="hero__title--first-line">Превратите </span> \r
				уездный город \r
				<span class="hero__title--center">в\xA0столицу</span> \r
				<span class="hero__title--right">земного шара</span>\r
      </h1>\r
\r
      <p class="hero__subtitle">\r
        Оплатите взнос на\xA0телеграммы для\xA0организации Международного васюкинского турнира по\xA0шахматам\r
      </p>\r
\r
      <div class="hero__actions" role="navigation" aria-label="Основные действия">\r
        <a href="#event" aria-label="Перейти к описанию турнира" class="btn btn--primary">Поддержать шахматную мысль</a>\r
        <a href="#members" aria-label="Перейти к участникам" class="btn btn--secondary">Подробнее о\xA0турнире</a>\r
      </div>\r
    </div>\r
  </div>\r
</section>`,i=`<section class="members" id='members'>\r
  <div class="members__container container">\r
\r
    <div class="members__top">\r
      <h2 class="members__title title">Участники турнира</h2>\r
\r
      <div class="members__controls" data-da=".members__controls_mobile,0,768">\r
        <button type="button" class="members__btn members__btn--prev" aria-label="Предыдущий участник"></button>\r
        <span class="members__counter" aria-live="polite">\r
          <span class="members__current">1</span>\r
          <span class="members__separator">/</span>\r
          <span class="members__total">6</span>\r
        </span>\r
        <button type="button" class="members__btn members__btn--next" aria-label="Следующий участник"></button>\r
      </div>\r
    </div>\r
\r
    <div class="members__slider" role="region" aria-label="Участники турнира">\r
      <ul class="members__track">\r
\r
        <li class="member-card">\r
          <div class="member-card__img">\r
            <img src="assets/members/member.png" alt="Хозе-Рауль Капабланка" loading="lazy">\r
          </div>\r
          <h3 class="member-card__name">Хозе-Рауль Капабланка</h3>\r
          <p class="member-card__role">Чемпион мира по шахматам</p>\r
          <a href="#" aria-label="Подробнее о Хозе-Рауле Капабланке" class="member-card__btn">Подробнее</a>\r
        </li>\r
\r
				<li class="member-card">\r
          <div class="member-card__img">\r
            <img src="assets/members/member.png" alt="Эммануил Ласкер" loading="lazy">\r
          </div>\r
          <h3 class="member-card__name">Эммануил Ласкер</h3>\r
          <p class="member-card__role">Чемпион мира по шахматам</p>\r
          <a href="#" aria-label="Подробнее о Эммануил Ласкер" class="member-card__btn">Подробнее</a>\r
        </li>\r
\r
				<li class="member-card">\r
          <div class="member-card__img">\r
            <img src="assets/members/member.png" alt="Александр Алехин" loading="lazy">\r
          </div>\r
          <h3 class="member-card__name">Александр Алехин</h3>\r
          <p class="member-card__role">Чемпион мира по шахматам</p>\r
          <a href="#" aria-label="Подробнее о Александр Алехин" class="member-card__btn">Подробнее</a>\r
        </li>\r
\r
				<li class="member-card">\r
          <div class="member-card__img">\r
            <img src="assets/members/member.png" alt="Арон Нимцович" loading="lazy">\r
          </div>\r
          <h3 class="member-card__name">Арон Нимцович</h3>\r
          <p class="member-card__role">Чемпион мира по шахматам</p>\r
          <a href="#" aria-label="Подробнее о Арон Нимцович" class="member-card__btn">Подробнее</a>\r
        </li>\r
\r
				<li class="member-card">\r
          <div class="member-card__img">\r
            <img src="assets/members/member.png" alt="Рихард Рети" loading="lazy">\r
          </div>\r
          <h3 class="member-card__name">Рихард Рети</h3>\r
          <p class="member-card__role">Чемпион мира по шахматам</p>\r
          <a href="#" aria-label="Подробнее о Рихард Рети" class="member-card__btn">Подробнее</a>\r
        </li>\r
\r
				<li class="member-card">\r
          <div class="member-card__img">\r
            <img src="assets/members/member.png" alt="Остап Бендер" loading="lazy">\r
          </div>\r
          <h3 class="member-card__name">Остап Бендер</h3>\r
          <p class="member-card__role">Гроссмейстер</p>\r
          <a href="#" aria-label="Подробнее о Остап Бендер" class="member-card__btn">Подробнее</a>\r
        </li>\r
\r
      </ul>\r
    </div>\r
\r
    <div class='members__controls_mobile'></div>\r
  </div>\r
</section>`,a=`<section class="stages container">\r
    <div class="stages__header">\r
      <h2 class="stages__title" id="stages-title">\r
				Этапы преображения Васюков\r
				<span class="stages__subtitle" role="doc-subtitle" aria-describedby="stages-title">Будущие источники обогащения васюкинцев</span>\r
			</h2>\r
    </div>\r
\r
    <div class="stages__body">\r
      <div class="stages-slider" role="region" aria-label="Этапы преображения Васюков">\r
        <div class="stages-slider__track">\r
\r
          <div class="stages-slide" id="slide-1" role="group" aria-label="Слайд 1"></div>\r
          <div class="stages-slide" id="slide-2" role="group" aria-label="Слайд 2"></div>\r
          <div class="stages-slide" id="slide-3" role="group" aria-label="Слайд 3"></div>\r
          <div class="stages-slide" id="slide-4" role="group" aria-label="Слайд 4"></div>\r
					<div class="stages-slide" id="slide-5" role="group" aria-label="Слайд 5"></div>\r
\r
        </div>\r
      </div>\r
\r
      <ol class="stages-grid">\r
        <li class="stage-card stage-card--1" data-da="#slide-1,0,768">\r
					<div class="stage-card__num" aria-hidden="true">\r
						<span>1</span>\r
					</div>\r
  				<p class="stage-card__text">\r
  				  Строительство железнодорожной магистрали Москва-Васюки\r
  				</p>\r
				</li>\r
        <li class="stage-card stage-card--2" data-da="#slide-1,1,768">\r
					<div class="stage-card__num" aria-hidden="true">\r
						<span>2</span>\r
					</div>\r
  				<p class="stage-card__text">\r
  				  Открытие фешенебельной гостиницы «Проходная пешка» и\xA0других небоскрёбов\r
  				</p>\r
				</li>\r
\r
        <li class="stage-card stage-card--3" data-da="#slide-2,0,768">\r
					<div class="stage-card__num" aria-hidden="true">\r
						<span>3</span>\r
					</div>\r
  				<p class="stage-card__text">\r
  				  Поднятие сельского хозяйства в\xA0радиусе на\xA0тысячу километров: производство овощей, фруктов, икры, шоколадных конфет\r
  				</p>\r
				</li>\r
\r
        <li class="stage-card stage-card--4" data-da="#slide-3,0,768">\r
					<div class="stage-card__num" aria-hidden="true">\r
						<span>4</span>\r
					</div>\r
  				<p class="stage-card__text">\r
  				  Строительство дворца для\xA0турнира\r
  				</p>\r
				</li>\r
        <li class="stage-card stage-card--5" data-da="#slide-3,1,768">\r
					<div class="stage-card__num" aria-hidden="true">\r
						<span>5</span>\r
					</div>\r
  				<p class="stage-card__text">\r
  				  Размещение гаражей для\xA0гостевого <br/> автотранспорта\r
  				</p>\r
				</li>\r
\r
        <li class="stage-card stage-card--6" data-da="#slide-4,0,768">\r
					<div class="stage-card__num" aria-hidden="true">\r
						<span>6</span>\r
					</div>\r
  				<p class="stage-card__text">\r
  				  Постройка сверхмощной радиостанции для\xA0передачи всему миру сенсационных результатов\r
  				</p>\r
				</li>\r
        <li class="stage-card stage-card--7" data-da="#slide-5,0,768">\r
					<div class="stage-card__num" aria-hidden="true">\r
						<span>7</span>\r
					</div>\r
  				<p class="stage-card__text">\r
  				  Создание аэропорта «Большие Васюки» с\xA0регулярным отправлением почтовых самолётов и\xA0дирижаблей во\xA0все\xA0концы света, включая Лос-Анжелос и\xA0Мельбурн\r
  				</p>\r
				</li>\r
      </ol>\r
\r
      <img class="stages__plane" src="assets/stages/plane.png" alt="" aria-hidden="true" />\r
  </div>\r
\r
	<div class="stages-slider__controls">\r
		<button type="button" class="stages-slider__btn stages-slider__btn--prev" aria-label="Предыдущий слайд"></button>\r
\r
		<div class="stages-slider__pagination">\r
			<span class="stages-slider__dot is-active"></span>\r
			<span class="stages-slider__dot"></span>\r
			<span class="stages-slider__dot"></span>\r
			<span class="stages-slider__dot"></span>\r
			<span class="stages-slider__dot"></span>\r
		</div>\r
\r
		<button type="button" class="stages-slider__btn stages-slider__btn--next" aria-label="Следующий слайд"></button>\r
	</div>\r
</section>`,o=`<section class="ticker" aria-label="Анонсы" role="region">\r
	<div class="ticker__wrap">\r
    <ul class="ticker__track" id="tickerTrack" aria-live="polite">\r
      <li class="ticker__item">Дело помощи утопающим — дело рук самих утопающих!</li>\r
      <li class="ticker__item">Шахматы двигают вперёд не только культуру, но и экономику!</li>\r
      <li class="ticker__item">Лёд тронулся, господа присяжные заседатели!</li>\r
    </ul>\r
  </div>\r
</section>`;window.addEventListener(`DOMContentLoaded`,()=>{let e=document.querySelectorAll(`.ticker__track`);e.length&&e.forEach(e=>{e.dataset.tickerReady||(e.dataset.tickerReady=`true`,e.innerHTML+=e.innerHTML)})});var s=class{constructor(e){this.type=e}init(){this.objects=[],this.daClassname=`_dynamic_adapt_`,this.nodes=[...document.querySelectorAll(`[data-da]`)],this.nodes.forEach(e=>{let t=e.dataset.da.trim().split(`,`),n={};n.element=e,n.parent=e.parentNode,n.destination=document.querySelector(t[0].trim()),n.breakpoint=t[2]?t[2].trim():`767`,n.place=t[1]?t[1].trim():`last`,n.index=this.indexInParent(n.parent,n.element),this.objects.push(n)}),this.arraySort(this.objects),this.mediaQueries=this.objects.map(({breakpoint:e})=>`(${this.type}-width: ${e}px),${e}`).filter((e,t,n)=>n.indexOf(e)===t),this.mediaQueries.forEach(e=>{let t=e.split(`,`),n=window.matchMedia(t[0]),r=t[1],i=this.objects.filter(({breakpoint:e})=>e===r);n.addListener(()=>{this.mediaHandler(n,i)}),this.mediaHandler(n,i)})}mediaHandler(e,t){e.matches?t.forEach(e=>this.moveTo(e.place,e.element,e.destination)):t.forEach(e=>{e.element.classList.contains(this.daClassname)&&this.moveBack(e.parent,e.element,e.index)})}moveTo(e,t,n){if(t.classList.add(this.daClassname),e===`last`||e>=n.children.length){n.append(t);return}if(e===`first`){n.prepend(t);return}n.children[e].before(t)}moveBack(e,t,n){t.classList.remove(this.daClassname),e.children[n]===void 0?e.append(t):e.children[n].before(t)}indexInParent(e,t){return[...e.children].indexOf(t)}arraySort(e){this.type===`min`?e.sort((e,t)=>e.breakpoint-t.breakpoint):e.sort((e,t)=>t.breakpoint-e.breakpoint)}};function c(){let e=document.querySelector(`.members__slider`),t=document.querySelector(`.members__track`),n=document.querySelector(`.members__btn--prev`),r=document.querySelector(`.members__btn--next`),i=document.querySelector(`.members__current`),a=document.querySelector(`.members__total`),o=t.querySelectorAll(`.member-card`);if(!e||!t||!n||!r||!o)return;let s=Array.from(t.children),c=s.length;a&&(a.textContent=String(c));function l(){return window.innerWidth<=600?1:window.innerWidth<=1024?2:3}let u=l(),d=u,f=null,p=!1,m=!1;function h(){let e=t.children[0];return e?e.getBoundingClientRect().width+20:0}function g(e=!0){e||(t.style.transition=`none`);let n=h();t.style.transform=`translateX(-${d*n}px)`,e||(t.offsetHeight,t.style.transition=``),_()}function _(){if(!i)return;let e=d-u;for(;e<0;)e+=c;for(;e>=c;)e-=c;let t=e+u;t>c&&(t=c),i.textContent=String(t)}function v(){let e=Array.from(t.children),n=e.slice(0,u),r=e.slice(-u);n.forEach(e=>{let n=e.cloneNode(!0);n.dataset.clone=`true`,t.appendChild(n)}),r.forEach(e=>{let n=e.cloneNode(!0);n.dataset.clone=`true`,t.prepend(n)}),s=Array.from(t.children)}function y(){t.querySelectorAll(`[data-clone="true"]`).forEach(e=>e.remove())}function b(e){m||(m=!0,d+=e*u,g(!0))}function x(){let e=t.children.length-u*2;d>e&&(d=u,g(!1)),d<u&&(d=e,g(!1))}function S(){C(),f=setInterval(()=>b(1),4e3)}function C(){f&&clearInterval(f)}e.addEventListener(`mouseenter`,C),e.addEventListener(`mouseleave`,S),r.addEventListener(`click`,()=>b(1)),n.addEventListener(`click`,()=>b(-1)),t.addEventListener(`transitionend`,()=>{x(),m=!1});let w=null;window.addEventListener(`resize`,()=>{clearTimeout(w),w=setTimeout(()=>{let e=l();if(e===u)return;let t=d-u;for(;t<0;)t+=c;for(;t>=c;)t-=c;C(),y(),u=e,v(),d=u+t,g(!1),S()},250)});function T(){n&&(n.addEventListener(`mouseenter`,C),n.addEventListener(`mouseleave`,S)),r&&(r.addEventListener(`mouseenter`,C),r.addEventListener(`mouseleave`,S))}function E(){o.forEach(e=>{e.addEventListener(`mousedown`,()=>{p=!0,C()}),e.addEventListener(`mouseup`,()=>{p=!1,S()}),e.addEventListener(`mouseleave`,()=>{p&&(p=!1,S())}),e.addEventListener(`touchstart`,()=>{p=!0,C()},{passive:!0}),e.addEventListener(`touchend`,()=>{p=!1,S()}),e.addEventListener(`touchcancel`,()=>{p=!1,S()})})}v(),g(!1),S(),T(),E()}var l=16;function u(){let e=document.querySelector(`.stages-slider__track`),t=document.querySelectorAll(`.stages-slide`),n=document.querySelector(`.stages-slider__btn--prev`),r=document.querySelector(`.stages-slider__btn--next`),i=document.querySelectorAll(`.stages-slider__dot`);if(!e||!t.length)return;let a=0,o=t.length-1,s=null;function c(){return t[0].getBoundingClientRect().width}function u(){let t=(c()+l)*a;e.style.transform=`translateX(-${t}px)`,i.forEach(e=>e.classList.remove(`is-active`)),i[a]?.classList.add(`is-active`),n.disabled=a===0,r.disabled=a===o}function d(){a<o&&(a++,u())}function f(){a>0&&(a--,u())}r?.addEventListener(`click`,d),n?.addEventListener(`click`,f),window.addEventListener(`resize`,()=>{cancelAnimationFrame(s),s=requestAnimationFrame(u)}),u()}var d=document.querySelector(`#app`),f=document.querySelector(`#main`);function p(e){d.insertAdjacentHTML(`afterbegin`,e)}function m(e){f.insertAdjacentHTML(`beforeend`,e)}function h(e){d.insertAdjacentHTML(`beforeend`,e)}p(n),m(r),m(o),m(e),m(a),m(i),m(o),h(t),new s(`max`).init(),u(),c();