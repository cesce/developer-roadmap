class o{constructor(){this.topicSearchId="search-topic-input",this.onDOMLoaded=this.onDOMLoaded.bind(this),this.init=this.init.bind(this),this.filterTopicNodes=this.filterTopicNodes.bind(this)}get topicSearchEl(){return document.getElementById(this.topicSearchId)}filterTopicNodes(i){const e=i.target.value.trim().toLowerCase();if(!e){document.querySelectorAll("[data-topic]").forEach(t=>t.classList.remove("hidden"));return}document.querySelectorAll("[data-topic]").forEach(t=>t.classList.add("hidden")),document.querySelectorAll(`[data-topic*="${e}"]`).forEach(t=>t.classList.remove("hidden"))}onDOMLoaded(){this.topicSearchEl&&this.topicSearchEl.addEventListener("keyup",this.filterTopicNodes)}init(){window.addEventListener("DOMContentLoaded",this.onDOMLoaded)}}const d=new o;d.init();
