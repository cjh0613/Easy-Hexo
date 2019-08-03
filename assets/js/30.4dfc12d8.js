(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{456:function(t,a,s){"use strict";s.r(a);var e=s(23),n=Object(e.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"部署-hexo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#部署-hexo","aria-hidden":"true"}},[t._v("#")]),t._v(" 部署 Hexo "),s("Badge",{attrs:{text:"@MoshiYeap"}}),t._v(" "),s("Badge",{attrs:{text:"@Odeinjul"}}),t._v(" "),s("Badge",{attrs:{text:"Finish"}})],1),t._v(" "),s("h2",{attrs:{id:"部署到-github"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#部署到-github","aria-hidden":"true"}},[t._v("#")]),t._v(" 部署到 GitHub")]),t._v(" "),s("h3",{attrs:{id:"准备工作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#准备工作","aria-hidden":"true"}},[t._v("#")]),t._v(" 准备工作")]),t._v(" "),s("ol",[s("li",[t._v("如果没有账号，请点此前往 "),s("a",{attrs:{href:"gitHub.com"}},[t._v("GitHub")]),t._v(" 注册一个 GitHub 账号。")]),t._v(" "),s("li",[t._v("新建一个公开仓库，仓库名格式为 "),s("code",[t._v("your_username.github.io")]),t._v(" 例如你的 GitHub 用户名是 "),s("code",[t._v("easyhexo")]),t._v("，那么你的仓库地址名称就应该是  "),s("code",[t._v("easyhexo.github.io")])]),t._v(" "),s("li",[t._v("创建完成后记下该仓库的 HTTPS/SSH 地址 一般格式为 "),s("code",[t._v("https://github.com/your_username/your_reponame.git")]),t._v(" 在下一步会用到。")])]),t._v(" "),s("h3",{attrs:{id:"安装部署插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装部署插件","aria-hidden":"true"}},[t._v("#")]),t._v(" 安装"),s("a",{attrs:{href:"https://github.com/hexojs/hexo-deployer-git",target:"_blank",rel:"noopener noreferrer"}},[t._v("部署插件"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" hexo-deployer-git --save\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" hexo-server --save\n")])])]),s("h3",{attrs:{id:"配置-git"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置-git","aria-hidden":"true"}},[t._v("#")]),t._v(" 配置 Git")]),t._v(" "),s("p",[t._v("如果你只是安装好了 Git 但没有配置过你的 Git ，那么现在需要做的第一件事情就是设置你的 Git 用户名和邮箱。\n在 Git Bash 中执行以下两条命令配置你的用户名和邮箱，这里建议用户名和邮箱与你的 GitHub 用户名和邮箱保持一致。")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global user.name "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Your_user_name"')]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global user.email Your_email@example.com\n")])])]),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("提醒")]),t._v(" "),s("p",[t._v("每次 Git 提交时都会附带这两条信息，用于记录是谁提交的更新，并且会随更新内容一起被记录到历史记录中。简单说，是用来标记的你的身份的~")])]),t._v(" "),s("h3",{attrs:{id:"配置站点-config-yml-文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置站点-config-yml-文件","aria-hidden":"true"}},[t._v("#")]),t._v(" 配置站点 "),s("code",[t._v("_config.yml")]),t._v(" 文件")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("deploy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" git   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 类型填git")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("repo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" <repository url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 你的Github仓库地址")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("branch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" master  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 分支名称。默认填写 master 如果您使用的是 GitHub ，程序会尝试自动检测。")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("message")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 提交信息可以自定义，不填的则默认为提交时间")]),t._v("\n")])])]),s("h3",{attrs:{id:"发布到-github"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#发布到-github","aria-hidden":"true"}},[t._v("#")]),t._v(" 发布到 GitHub")]),t._v(" "),s("p",[t._v("在本地的 Hexo 站点根目录下，执行如下命令即可部署到 GitHub Pages 上。")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ hexo clean "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" hexo d -g\n")])])]),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("提醒")]),t._v(" "),s("p",[t._v("如果是第一次使用，会弹出一个登录框，需要登陆你的 GitHub 账号。")])]),t._v(" "),s("h3",{attrs:{id:"自定义域名"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自定义域名","aria-hidden":"true"}},[t._v("#")]),t._v(" 自定义域名")]),t._v(" "),s("ol",[s("li",[t._v("如果你拥有个人域名，请用 A 记录解析到以下IP中的任意一个。如果使用 CNAME 请解析到你的 GitHub 仓库名称。")])]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[t._v("185.199.108.153\n185.199.109.153\n185.199.110.153\n185.199.111.153\n")])])]),s("p",[s("strong",[t._v("参考表格")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("记录类型")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("主机记录")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("解析路线")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("记录值")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("MAX 优先级")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("TTL（秒）")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("A")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("@")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("默认")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("185.199.110.153")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("600")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("CNAME")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("@")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("默认")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("GitHub 博客仓库名称")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("600")])])])]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[t._v("打开仓库设置,找到 GitHub Pages 项目，修改 Custom domain 选项的值为你的自定义域名（不带 http 等前缀）")]),t._v(" "),s("li",[t._v("勾选 Custom domain 选项下的 Enforce HTTPS 选项，强制开启 Https 。如果遇到 "),s("code",[t._v("Enforce HTTPS")]),t._v(" 选项无法打开，可以稍等一会儿再尝试。")])]),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("提醒")]),t._v(" "),s("p",[t._v("同时需要在本地的 "),s("code",[t._v("source")]),t._v(" 目录新建一个 CNAME 文件，内容为你的自定义域名（不带 http 等前缀）。否则无法使用自定义域名功能（ hexo d 生成的文件没有 CNAME 文件，导致仓库的自定域名设置失效）")])]),t._v(" "),s("h2",{attrs:{id:"部署到-coding（dev-tencent-com）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#部署到-coding（dev-tencent-com）","aria-hidden":"true"}},[t._v("#")]),t._v(" 部署到 CODING（dev.tencent.com）")]),t._v(" "),s("h3",{attrs:{id:"准备工作-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#准备工作-2","aria-hidden":"true"}},[t._v("#")]),t._v(" 准备工作")]),t._v(" "),s("ol",[s("li",[t._v("如果没有账号，请点此前往 "),s("a",{attrs:{href:"dev.tencent.com"}},[t._v("CODING")]),t._v(" 注册 CODING 账号。")]),t._v(" "),s("li",[t._v("新建一个公开仓库，仓库名格式为 "),s("code",[t._v("your_username.coding.me")]),t._v(" 例如你的 CODING 用户名(username)是 "),s("code",[t._v("easyhexo")]),t._v("，那么你的仓库名称就应该是  "),s("code",[t._v("easyhexo.coding.me")])]),t._v(" "),s("li",[t._v("创建完成后记下该仓库的 HTTPS/SSH 地址 一般格式为 "),s("code",[t._v("https://coding.net/your_username/your_reponame.git")]),t._v(" 在下一步会用到。")]),t._v(" "),s("li",[t._v("如果您没有配置 "),s("code",[t._v("Git")]),t._v(" 和 "),s("code",[t._v("hexo-deployer-git")]),t._v(" 请参阅前文配置方法配置。")])]),t._v(" "),s("h3",{attrs:{id:"配置站点-config-yml-文件-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置站点-config-yml-文件-2","aria-hidden":"true"}},[t._v("#")]),t._v(" 配置站点 "),s("code",[t._v("_config.yml")]),t._v(" 文件")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("deploy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" git   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 类型填git")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("repo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("github")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" <github repository url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 你的GitHub仓库地址")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("coding")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" <coding repository url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 你的coding仓库地址")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("branch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" master  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 默认填写 master。")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("message")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 提交信息可以自定义，不填的则默认为提交时间")]),t._v("\n")])])]),s("h3",{attrs:{id:"发布到-coding"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#发布到-coding","aria-hidden":"true"}},[t._v("#")]),t._v(" 发布到 CODING")]),t._v(" "),s("p",[t._v("在本地 Hexo 站点根目录下，执行如下命令即可部署到 CODING Pages 上。")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ hexo clean "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" hexo d -g\n")])])]),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("提醒")]),t._v(" "),s("p",[t._v("如果是第一次使用，会弹出一个登录框，需要登陆你的 CODING 账号。")])]),t._v(" "),s("h3",{attrs:{id:"自定义域名-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自定义域名-2","aria-hidden":"true"}},[t._v("#")]),t._v(" 自定义域名")]),t._v(" "),s("ol",[s("li",[t._v("如果你拥有个人域名，请添加 CNAME 记录。")]),t._v(" "),s("li",[t._v("绑定前请在域名 DNS 设置中添加一条 CNAME 记录指向 xxxx.coding.me。将@和www记录都解析到这个即可。")])]),t._v(" "),s("p",[s("strong",[t._v("参考表格")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("记录类型")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("主机记录")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("解析路线")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("记录值")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("MAX 优先级")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("TTL（秒）")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("CNAME")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("www")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("默认")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("xxxx.coding.me")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("600")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("CNAME")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("@")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("默认")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("xxxx.coding.me")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("600")])])])]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[t._v("打开仓库设置,找到 代码-Pages 服务，在绑定新域名下的文本框内输入你的自定义域名（不带 http 等前缀）。")]),t._v(" "),s("li",[t._v("勾选 强制 HTTPS 访问。")])]),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("提醒")]),t._v(" "),s("p",[t._v("出于 SEO 的考虑，我们建议您绑定一个 www 域名即可，如果您使用的域名 DNS 解析服务不支持添加 CNAME 记录，建议更换 Nameservers 到其他支持该功能的域名提供商（如 腾讯云）。如果遇到自定义域名失效，请参照前文 GitHub 配置方案解决。")])]),t._v(" "),s("p",[t._v("详细内容请参阅 "),s("a",{attrs:{href:"https://dev.tencent.com/help/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CODING 官方文档"),s("OutboundLink")],1),t._v(" 。")]),t._v(" "),s("h2",{attrs:{id:"部署到-centos-servers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#部署到-centos-servers","aria-hidden":"true"}},[t._v("#")]),t._v(" 部署到 CentOS Servers")]),t._v(" "),s("h3",{attrs:{id:"预先准备"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#预先准备","aria-hidden":"true"}},[t._v("#")]),t._v(" 预先准备")]),t._v(" "),s("ul",[s("li",[t._v("确保你的 PC 已经安装好 Hexo 主程序的并且生成站点文件夹。安装 Hexo，请参阅"),s("router-link",{attrs:{to:"/1-Hexo-install-and-config/1-2-install-hexo.html"}},[t._v("安装 Hexo")])],1),t._v(" "),s("li",[t._v("一台搭载 CenOS 7.4 64bit 的 ECS 服务器实例，其他 Linux 系统也可以")]),t._v(" "),s("li",[t._v("你至少应该掌握一丢丢的 Linux 命令")])]),t._v(" "),s("h3",{attrs:{id:"安装部署插件-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装部署插件-2","aria-hidden":"true"}},[t._v("#")]),t._v(" 安装"),s("a",{attrs:{href:"https://github.com/hexojs/hexo-deployer-git",target:"_blank",rel:"noopener noreferrer"}},[t._v("部署插件"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" hexo-deployer-git --save\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" hexo-server --save\n")])])]),s("h3",{attrs:{id:"服务器环境配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#服务器环境配置","aria-hidden":"true"}},[t._v("#")]),t._v(" 服务器环境配置")]),t._v(" "),s("h4",{attrs:{id:"更新服务器的软件包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更新服务器的软件包","aria-hidden":"true"}},[t._v("#")]),t._v(" 更新服务器的软件包")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("yum -y update\n")])])]),s("h4",{attrs:{id:"安装-git"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装-git","aria-hidden":"true"}},[t._v("#")]),t._v(" 安装 Git")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("yum "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" -y\n")])])]),s("h4",{attrs:{id:"新建-git-用户"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#新建-git-用户","aria-hidden":"true"}},[t._v("#")]),t._v(" 新建 Git 用户")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("useradd")]),t._v(" -m "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v("\n")])])]),s("h4",{attrs:{id:"设置-gituser-的密码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设置-gituser-的密码","aria-hidden":"true"}},[t._v("#")]),t._v(" 设置 gituser 的密码")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("passwd")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v("\n")])])]),s("h4",{attrs:{id:"配置-ssh-免密登陆"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置-ssh-免密登陆","aria-hidden":"true"}},[t._v("#")]),t._v(" 配置 SSH 免密登陆")]),t._v(" "),s("p",[t._v("我们在使用 SSH 访问服务器时每一次连接都需要验证相应用户的密码，十分繁琐，所以我们通过一组密匙来进行授权访问。\n在 "),s("code",[t._v("Git Bash")]),t._v(" 中使用 "),s("code",[t._v("ssh-keygen")]),t._v(" 命令在你的电脑上生成一组密匙，这个过程中 "),s("code",[t._v("ssh-keygen")]),t._v(" 会确认密钥的存储位置（ Windows 下默认是 "),s("code",[t._v("c:users/username/.ssh/id_rsa")]),t._v("），然后它会要求你输入两次密钥口令。如果你不想在使用密钥时输入口令，将其留空。")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ ssh-keygen\n")])])]),s("p",[t._v("使用 "),s("code",[t._v("ssh-copy-id -i")]),t._v(" 命令将公钥也就是 "),s("code",[t._v("id_rsa.pub")]),t._v(" 添加到服务器上。这个过程中需要验证你所添加的用户的密码，如果你的服务器上存在多个用户，你需要逐一添加。添加完成后可以通过 "),s("code",[t._v("ssh your_user_name@HostIP")]),t._v(" 命令来验证是否添加成功。")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ ssh-copy-id -i ~/.ssh/id_rsa.pub your_user_name@HostIP  //添加公钥\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ssh")]),t._v(" your_user_name@HostIP   //验证是否添加成功\n")])])]),s("h4",{attrs:{id:"禁止-git-用户-shell-登陆权限"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#禁止-git-用户-shell-登陆权限","aria-hidden":"true"}},[t._v("#")]),t._v(" 禁止 Git 用户 Shell 登陆权限")]),t._v(" "),s("p",[t._v("出于安全考虑，禁用 Git 用户的 shell 权限(必须先验证是否可以免密码登陆，可以后再禁用 shell 权限，否则无法通过 "),s("code",[t._v("ssh-copy-id -i")]),t._v(" 添加 SSH 公钥)，使用 "),s("code",[t._v("vim /etc/passwd")]),t._v(" 命令修改 "),s("code",[t._v("~/etc/")]),t._v(" 下的 passwa 文件")]),t._v(" "),s("div",{staticClass:"language-diff extra-class"},[s("pre",{pre:!0,attrs:{class:"language-diff"}},[s("code",[s("span",{pre:!0,attrs:{class:"token deleted"}},[t._v("-  git:x:1001:1001:,,,:/home/git:/bin/bash")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token inserted"}},[t._v("+  git:x:1001:1001:,,,:/home/git:/usr/bin/git-shell")]),t._v("\n")])])]),s("h4",{attrs:{id:"ssh-免密登陆无效问题排查"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ssh-免密登陆无效问题排查","aria-hidden":"true"}},[t._v("#")]),t._v(" SSH 免密登陆无效问题排查")]),t._v(" "),s("p",[t._v("检查 "),s("code",[t._v("/etc/ssh/")]),t._v(" 目录下的 "),s("code",[t._v("sshd_config")]),t._v(" 文件，确认以下关键选项是否正常")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[t._v("RSAAuthentication yes\nPubkeyAuthentication yes\nAuthorizedKeysFile      .ssh/authorized_keys\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#GSSAPIAuthentication yes")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#GSSAPICleanupCredentials yes")]),t._v("\n")])])]),s("p",[t._v("若还是不能正常工作，则检查用户权限和组权限")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("chmod")]),t._v(" 0755 /home/your_user_name\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("chmod")]),t._v(" 700 /home/your_user_name/.ssh\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("chmod")]),t._v(" 600 /home/your_user_name/.ssh/authorized_keys\n")])])]),s("p",[t._v("关于 SSH 的更多问题可查阅"),s("a",{attrs:{href:"https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/#platform-windows",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),s("OutboundLink")],1)]),t._v(" "),s("h4",{attrs:{id:"初始化-git-仓库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#初始化-git-仓库","aria-hidden":"true"}},[t._v("#")]),t._v(" 初始化 Git 仓库")]),t._v(" "),s("p",[t._v("新建 "),s("code",[t._v("/var/repo")]),t._v(" 目录，并在该目录下，使用 "),s("code",[t._v("git init --bare")]),t._v(" 创建一个名为 "),s("code",[t._v("blog.git")]),t._v(" 裸仓库，并改变该目录的所有者为 git 用户。")]),t._v(" "),s("blockquote",[s("p",[t._v("裸仓库可以直接作为服务器仓库供各开发者 push、pull 数据，实现数据共享和同步，不保存文件，只保存历史提交的版本信息。")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" -p /var/repo    //新建 var/repo 目录\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cd")]),t._v(" /var/repo          //进入该目录\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" init --bare blog.git   //新建一个裸仓库\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("chown")]),t._v(" -R git:git blog.git\n")])])]),s("h4",{attrs:{id:"配置-git-hooks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置-git-hooks","aria-hidden":"true"}},[t._v("#")]),t._v(" 配置 Git Hooks")]),t._v(" "),s("p",[t._v("使用 vim 命令在 "),s("code",[t._v("/var/repo/blog.git/hooks")]),t._v(" 目录下创建 "),s("code",[t._v("post-receive")]),t._v(" 文件")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("vim /var/repo/blog.git/hooks/post-receive\n")])])]),s("p",[t._v("并且在 "),s("code",[t._v("post-receive")]),t._v(" 文件中写入以下内容")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token shebang important"}},[t._v("#!/bin/sh")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" --work-tree"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/home/www/hexo --git-dir"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/var/repo/blog.git checkout -f\n")])])]),s("p",[t._v("提升 "),s("code",[t._v("post-receive")]),t._v(" 的可执行权限")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("chmod")]),t._v(" +x /var/repo/blog.git/hooks/post-receive\n")])])]),s("h4",{attrs:{id:"安装-nginx"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装-nginx","aria-hidden":"true"}},[t._v("#")]),t._v(" 安装 Nginx")]),t._v(" "),s("blockquote",[s("p",[t._v("Nginx 是一个高性能的 HTTP 和反向代理服务，也是一个 IMAP/POP3/SMTP 服务。外网用户访问服务器的 Web 服务由 Nginx 提供，Nginx 需要配置静态资源的路径信息才能通过 url 正确访问到服务器上的静态资源。")])]),t._v(" "),s("p",[t._v("在安装之前我们先创建用于存放静态资源的目录 "),s("code",[t._v("/home/www/hexo")]),t._v(" ，并更改其所有者，稍后将其设置为 Nginx 的默认静态资源目录。")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" -p /home/www/hexo      //创建目录\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("chown")]),t._v(" -R git:git /home/www/hexo   //更改目录所有者\nyum "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" nginx -y   //安装Nginx\n")])])]),s("h4",{attrs:{id:"配置静态服务器访问路径"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置静态服务器访问路径","aria-hidden":"true"}},[t._v("#")]),t._v(" 配置静态服务器访问路径")]),t._v(" "),s("p",[t._v("修改 Nginx 默认静态资源路径，打开 Nginx 的默认配置文件 "),s("code",[t._v("/etc/nginx/nginx.conf")]),t._v(" ，将默认的 "),s("code",[t._v("root /usr/share/nginx/html;")]),t._v(" 修改为: "),s("code",[t._v("root /home/www/hexo;")]),t._v(" 如下所示。")]),t._v(" "),s("div",{staticClass:"language-diff extra-class"},[s("pre",{pre:!0,attrs:{class:"language-diff"}},[s("code",[t._v("    server {\n        listen       80 default_server;\n        listen       [::]:80 default_server;\n        server_name  _;\n"),s("span",{pre:!0,attrs:{class:"token deleted"}},[t._v("-       root         /data/www;")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token inserted"}},[t._v("+       root         /home/www/hexo;")]),t._v("\n\n        include /etc/nginx/default.d/*.conf;\n\n        location / {\n        }\n\n        error_page 404 /404.html;\n            location = /40x.html {\n        }\n\n        error_page 500 502 503 504 /50x.html;\n            location = /50x.html {\n        }\n    }\n\n")])])]),s("p",[t._v("如果你拥有 "),s("code",[t._v("SSL,TSL")]),t._v(" 证书，需要配置 "),s("code",[t._v("HTTPS")]),t._v(" 访问或者添加 "),s("code",[t._v("HTTP")]),t._v(" 强制转换 "),s("code",[t._v("HTTPS")]),t._v(" 访问功能，请参照以下代码进行配置。")]),t._v(" "),s("div",{staticClass:"language-nginx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-nginx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("listen")]),t._v("       "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v(" default_server"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("listen")]),t._v("       "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v(" default_server"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("301")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("https")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("liujunzhou"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("top"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$request_uri")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 使用301重定向")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Settings for a TLS enabled server.")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("listen")]),t._v("       "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("443")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ssl")]),t._v(" http2 default_server"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("listen")]),t._v("       "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("443")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ssl")]),t._v(" http2 default_server"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server_name")]),t._v("  liujunzhou"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("top"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#你的域名")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("root")]),t._v("         "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("home"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("www"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("hexo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Nginx 静态资源存放路径")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ssl_certificate")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/etc/pki/tls/certs/CA.crt"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ssl_certificate_key")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/etc/pki/tls/certs/CA.key"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ssl_session_cache")]),t._v(" shared"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SSL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("m"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ssl_session_timeout")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("m"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ssl_protocols")]),t._v(" TLSv1 TLSv1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" TLSv1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#按照此协议配置")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ssl_ciphers")]),t._v(" ECDHE"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("RSA"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("AES128"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("GCM"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("SHA256"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("HIGH"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("aNULL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("MD5"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("RC4"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("DHE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#按照此套件配置")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ssl_prefer_server_ciphers")]),t._v(" on"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Load configuration files for the default server block.")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("include")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("etc"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("nginx"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("default"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("d"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("conf"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("error_page")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("404")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("404.")]),t._v("html"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("40")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("html "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("error_page")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("502")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("503")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("504")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("html"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("html "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("h3",{attrs:{id:"配置-config-yml文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置-config-yml文件","aria-hidden":"true"}},[t._v("#")]),t._v(" 配置"),s("code",[t._v("_config.yml")]),t._v("文件")]),t._v(" "),s("p",[t._v("在 "),s("code",[t._v("_config.yml")]),t._v(" 文件中设置 deploy 选项")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Deployment")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("deploy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" git "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 类型填git")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("repo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" your_user_name@HostIP"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/var/repo/blog.git\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("branch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" master\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("message")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n")])])]),s("h4",{attrs:{id:"发布站点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#发布站点","aria-hidden":"true"}},[t._v("#")]),t._v(" 发布站点")]),t._v(" "),s("p",[t._v("在你的 Hexo 站点根目录下，执行如下命令即可发布你的站点到服务器上。")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ hexo clean "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" hexo d -g\n")])])]),s("h2",{attrs:{id:"其他问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其他问题","aria-hidden":"true"}},[t._v("#")]),t._v(" 其他问题")]),t._v(" "),s("h3",{attrs:{id:"hooks-失效"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hooks-失效","aria-hidden":"true"}},[t._v("#")]),t._v(" Hooks 失效")]),t._v(" "),s("p",[t._v("如果部署成功，但是 "),s("code",[t._v("/home/www/hexo")]),t._v(" 目录的资源文件并未更新，请检查 "),s("code",[t._v("post-receive")]),t._v(" 是否有执行权限，以及 "),s("code",[t._v("/home/www/hexo")]),t._v(" 文件所有者是否为 Git 用户，以及是否具有读写权限。")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("chown")]),t._v(" -R git:git /var/repo/blog.git  //更改blog.git目录的所有者\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("chmod")]),t._v(" +x /var/repo/blog.git/hooks/post-receive   //提升post-receive执行权\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("chown")]),t._v(" -R git:git /home/www/hexo   //或者chmod 755 /home/www/hexo 确保hexo文件夹为空\n")])])]),s("h3",{attrs:{id:"部署后，部分页面-404"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#部署后，部分页面-404","aria-hidden":"true"}},[t._v("#")]),t._v(" 部署后，部分页面 404")]),t._v(" "),s("p",[t._v("部分情况下，在初次部署之后，部分文章或者页面路径大小如果更改了，会导致新部署上去的页面出现 404 错误。\n这是由于 Git 没有区分大小写导致的文件路径错误。修改 "),s("code",[t._v("hexo根目录/.deploy_git/.git/")]),t._v(" 下的 "),s("code",[t._v("config")]),t._v(" 文件")]),t._v(" "),s("div",{staticClass:"language-diff extra-class"},[s("pre",{pre:!0,attrs:{class:"language-diff"}},[s("code",[t._v("[core]\n\trepositoryformatversion = 0\n\tfilemode = false\n\tbare = false\n\tlogallrefupdates = false\n\tsymlinks = false\n"),s("span",{pre:!0,attrs:{class:"token deleted"}},[t._v("-\tignorecase = true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token inserted"}},[t._v("+   ignorecase = false")]),t._v('\n[branch "master"]\n\tremote = ueser_name@HostIP:/var/repo/blog.git\n\tmerge = refs/heads/master\n')])])]),s("h2",{attrs:{id:"视频"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#视频","aria-hidden":"true"}},[t._v("#")]),t._v(" 视频")]),t._v(" "),s("dplayer",{attrs:{src:"https://dl.sm9.top/Video/EasyHexo/部署.mp4","danmaku-id":"CDCA91E8E5FD5955BB772A08B0F43DAA",subtitle:"https://dl.sm9.top/Video/EasyHexo/部署.vtt","cross-origin":!0}})],1)},[],!1,null,null,null);a.default=n.exports}}]);