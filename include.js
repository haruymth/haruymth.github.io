//var header = document.getElementsByTagName("header");
//header.innerHTML = (`
//	<header style="width:100%;height:65px;background-color:#51BEBE;box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.3);margin:0px;position: fixed;top: 0;left: 0;">
//		<ul>
//				<li> <a href="https://haru-ymth.github.io/" class="nav">yamaguchi03のホームページ</a> </li>
//				<li> <a href="https://haru-ymth.github.io/projects" class="nav">作品</a> </li>
//				<li> <a href="https://haru-ymth.github.io/others" class="nav">その他</a> </li>
//		</ul>
//	</header>`);
//var footer = document.getElementsByTagName("footer");
//footer.innerHTML = (`
//	<footer style="text-align:center; background-color:#233648;color:#ffffff;margin-top:60px;padding:5px;bottom:0;">
//		© 2022 yamaguchi03
//	</footer>
//`);
//
var footer = document.createElement('footer');
footer.innerHTML = `
<div></div>
<p><a rel="license" href="http://creativecommons.org/licenses/by-sa/2.0/"><img alt="クリエイティブ・コモンズ・ライセンス" style="border-width:0" src="data:image/png;base64,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" /></a>このサイトは <a rel="license" href="http://creativecommons.org/licenses/by-sa/2.0/">クリエイティブ・コモンズ 表示 - 継承 2.0 一般 ライセンス</a>の下に提供されています。</p>
<div></div>
`;
