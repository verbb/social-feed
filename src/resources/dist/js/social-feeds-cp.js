void 0===Craft.SocialFeeds&&(Craft.SocialFeeds={}),function($){function e(e,t){const a=undefined,r=$(e).find(".lightswitch").data("lightswitch"),s=undefined;$('.sf-switch-group[data-toggle-group="'+t+'"]').each((function(t,a){$(a).removeClass("disabled"),a!==e&&r.on&&($(a).addClass("disabled"),$(a).find(".lightswitch").data("lightswitch").turnOff())}))}$(document).on("click","[data-refresh-settings]",(function(e){e.preventDefault();const t=$(this),a=t.parent().parent(),r=a.find("select"),s=undefined,o=undefined,n={source:t.data("source"),setting:t.data("refresh-settings")},d=function(e){let t=a.find(".sf-error");e||t.remove(),t.length||(t=$('<div class="sf-error error"></div>').appendTo(a)),t.html(e)},i=function(e){let t=r.val(),a="";$.each(e,((e,t)=>{a+='<option value="'+t.value+'">'+t.label+"</option>"})),r.html(a),t&&r.val(t)};t.addClass("sf-loading sf-loading-sm"),d(null),Craft.sendActionRequest("POST","social-feeds/sources/refresh-settings",{data:n}).then((e=>{if(e.data.error){let t=Craft.t("social-feeds","An error occurred.");return e.data.error&&(t+=`<br><code>${e.data.error}</code>`,e.data.file&&e.data.line&&(t+=`<br><code>${e.data.file}:${e.data.line}</code>`)),void d(t)}i(e.data)})).catch((e=>{let t=e;e.response&&e.response.data&&e.response.data.error&&(t+=`<br><code>${e.response.data.error}</code>`,e.response.data.file&&e.response.data.line&&(t+=`<br><code>${e.response.data.file}:${e.response.data.line}</code>`)),d(t)})).finally((()=>{t.removeClass("sf-loading sf-loading-sm")}))})),$(document).on("click",".sf-switch-group",(function(t){t.preventDefault();const a=$(this).find(".lightswitch"),r=$(this).data("toggle-group");if(a.length){const s=a.data("lightswitch");s&&(s.toggle(),r&&e(t.currentTarget,r))}})),Garnish.$doc.ready((()=>{$(".sf-switch-group[data-toggle-group] .lightswitch.on").each((function(t,a){const r=$(this).parents(".sf-switch-group"),s=r.data("toggle-group");e(r[0],s)}))})),$(document).on("click",".sf-refresh-btn",(function(e){e.preventDefault();const t=$(this),a=$(".sf-feed-preview");t.addClass("sf-loading sf-loading-sm");const r=function(e){let t=a.find(".sf-error");e||t.remove(),t.length||(t=$('<div class="sf-error error"></div>').prependTo(a)),t.html(e)};var s=Garnish.getPostData($("#main-form")),o;const n={sources:Craft.expandPostArray(s).sources};r(null),Craft.sendActionRequest("POST","social-feeds/feeds/preview",{data:n}).then((e=>{if(e.data.error){let t=Craft.t("social-feeds","An error occurred.");return e.data.error&&(t+=`<br><code>${e.data.error}</code>`,e.data.file&&e.data.line&&(t+=`<br><code>${e.data.file}:${e.data.line}</code>`)),void r(t)}a.html(e.data)})).catch((e=>{let t=e;e.response&&e.response.data&&e.response.data.error&&(t+=`<br><code>${e.response.data.error}</code>`,e.response.data.file&&e.response.data.line&&(t+=`<br><code>${e.response.data.file}:${e.response.data.line}</code>`)),r(t)})).finally((()=>{t.removeClass("sf-loading sf-loading-sm")}))}))}(jQuery);
//# sourceMappingURL=social-feeds-cp.js.map