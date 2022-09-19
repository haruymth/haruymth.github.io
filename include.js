var header = document.getElementsByTagName("header");
header.innerHTML = (`
	<header style="width:100%;height:65px;background-color:#51BEBE;box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.3);margin:0px;position: fixed;top: 0;left: 0;">
		<ul>
				<li> <a href="https://haru-ymth.github.io/" class="nav">yamaguchi03のホームページ</a> </li>
				<li> <a href="https://haru-ymth.github.io/projects" class="nav">作品</a> </li>
				<li> <a href="https://haru-ymth.github.io/others" class="nav">その他</a> </li>
		</ul>
	</header>`);
var footer = document.getElementsByTagName("footer");
footer.innerHTML = (`
	<footer style="text-align:center; background-color:#233648;color:#ffffff;margin-top:60px;padding:5px;bottom:0;">
		© 2022 yamaguchi03
	</footer>
</html>
`);
