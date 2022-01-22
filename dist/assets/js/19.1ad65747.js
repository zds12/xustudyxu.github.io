(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{1173:function(t,_,v){"use strict";v.r(_);var s=v(65),a=Object(s.a)({},(function(){var t=this,_=t.$createElement,s=t._self._c||_;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"第十二章-linux-进程管理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第十二章-linux-进程管理"}},[t._v("#")]),t._v(" "),s("strong",[t._v("❤️"),s("strong",[t._v("第十二章 Linux 进程管理")]),t._v("❤️")])]),t._v(" "),s("h2",{attrs:{id:"_12-1-基本介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_12-1-基本介绍"}},[t._v("#")]),t._v(" 12.1 基本介绍")]),t._v(" "),s("ol",[s("li",[t._v("在LINUX中，每个"),s("strong",[t._v("执行的程序")]),t._v("都称为一个"),s("strong",[t._v("进程")]),t._v("。每一个进程都分配一个ID号("),s("strong",[t._v("pid,进程号")]),t._v(")。")]),t._v(" "),s("li",[t._v("每个进程都可能以两种方式存在的。"),s("strong",[t._v("前台")]),t._v("与"),s("strong",[t._v("后台")]),t._v("，所谓前台进程就是用户目前的屏幕上可以进行操作的。后台进程则是实际在操作，但由于屏幕上无法看到的进程，通常使用后台方式执行。")]),t._v(" "),s("li",[t._v("一般系统的服务都是以后台进程的方式存在，而且都会常驻在系统中。直到关机才才结束。")]),t._v(" "),s("li",[t._v("示意图")])]),t._v(" "),s("p",[s("img",{attrs:{src:v(460),alt:"1631695213682"}})]),t._v(" "),s("p",[s("img",{attrs:{src:v(461),alt:"1631695223928"}})]),t._v(" "),s("h2",{attrs:{id:"_12-2-显示系统执行的进程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_12-2-显示系统执行的进程"}},[t._v("#")]),t._v(" 12.2 显示系统执行的进程")]),t._v(" "),s("h3",{attrs:{id:"_12-2-1-基本介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_12-2-1-基本介绍"}},[t._v("#")]),t._v(" 12.2.1 基本介绍")]),t._v(" "),s("p",[s("font",{attrs:{color:"#DC4040",size:"4",face:"黑体"}},[t._v("ps")]),t._v("命令是用来查看目前系统中，有哪些正在执行，以及它们执行的情况，可以不加参数。")],1),t._v(" "),s("ul",[s("li",[t._v("ps显示的信息选项:")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("字段")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("PID")]),t._v(" "),s("td",[t._v("进程识别号")])]),t._v(" "),s("tr",[s("td",[t._v("TTY")]),t._v(" "),s("td",[t._v("终端机号")])]),t._v(" "),s("tr",[s("td",[t._v("TIME")]),t._v(" "),s("td",[t._v("此进程所消CPU时间")])]),t._v(" "),s("tr",[s("td",[t._v("CMD")]),t._v(" "),s("td",[t._v("正在执行的命令或进程名")])])])]),t._v(" "),s("ul",[s("li",[s("font",{attrs:{color:"#DC4040",size:"4",face:"黑体"}},[t._v("ps -a")]),t._v(":显示当前终端的所有进程信息")],1),t._v(" "),s("li",[s("font",{attrs:{color:"#DC4040",size:"4",face:"黑体"}},[t._v("ps -u")]),t._v(":以用户的格式显示进程信息")],1),t._v(" "),s("li",[s("font",{attrs:{color:"#DC4040",size:"4",face:"黑体"}},[t._v("ps -x:")]),t._v("显示后台进程进行的参数")],1)]),t._v(" "),s("p",[s("img",{attrs:{src:v(462),alt:"1631700431726"}})]),t._v(" "),s("h3",{attrs:{id:"_12-2-2-ps详解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_12-2-2-ps详解"}},[t._v("#")]),t._v(" 12.2.2 ps详解")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("指令: "),s("font",{attrs:{color:"#DC4040",size:"4",face:"黑体"}},[t._v("ps  -aux l grep xxx ")]),t._v("，比如我看看有没有sshd服务")],1),t._v(" "),s("p",[s("strong",[t._v("ps -aux | grep sshd")])])]),t._v(" "),s("li",[s("p",[t._v("指令说明")]),t._v(" "),s("p",[s("strong",[t._v("System V")]),t._v("展示风格")]),t._v(" "),s("p",[s("strong",[t._v("USER")]),t._v(":用户名称")]),t._v(" "),s("p",[s("strong",[t._v("PID")]),t._v(":进程号")]),t._v(" "),s("p",[s("strong",[t._v("%CPU")]),t._v(":进程占用CPU的百分比")]),t._v(" "),s("p",[s("strong",[t._v("%MEM")]),t._v(":进程占用物理内存的百分比")]),t._v(" "),s("p",[s("strong",[t._v("VSZ")]),t._v(":进程占用的虚拟内存大小(单位:KB)")]),t._v(" "),s("p",[s("strong",[t._v("RSS")]),t._v(":进程占用的物理内存大小(单位:KB)")]),t._v(" "),s("p",[s("strong",[t._v("TT")]),t._v(":终端名称,缩写")]),t._v(" "),s("p",[s("strong",[t._v("STAT")]),t._v(":进程状态，其中**S-**睡眠，**s-**表示该进程是会话的先导进程，**N-**表示进程拥有比普通优先")]),t._v(" "),s("p",[t._v("级更低的优先级，**R-**正在运行，**D-**短期等待，**Z-**僵死进程，**T-**被跟踪或者被停止等等")]),t._v(" "),s("p",[s("strong",[t._v("STARTED")]),t._v(":进程的启动时间")]),t._v(" "),s("p",[s("strong",[t._v("TIME")]),t._v(":CPU时间，即进程使用CPU的总时间")]),t._v(" "),s("p",[s("strong",[t._v("COMMAND")]),t._v(":启动进程所用的命令和参数，如果过长会被截断显示")])])]),t._v(" "),s("h3",{attrs:{id:"_12-2-3-应用案例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_12-2-3-应用案例"}},[t._v("#")]),t._v(" 12.2.3 应用案例")]),t._v(" "),s("p",[t._v("要求:以全格式显示当前所有的进程，查看进程的父进程。查看 sshd 的父进程信息")]),t._v(" "),s("p",[s("font",{attrs:{color:"#DC4040",size:"4",face:"黑体"}},[t._v("ps -ef ")]),t._v("是以全局格式显示当前所有进程")],1),t._v(" "),s("p",[s("font",{attrs:{color:"#DC4040",size:"4",face:"黑体"}},[t._v("-e")]),t._v(" 显示所以进程     "),s("font",{attrs:{color:"#DC4040",size:"4",face:"黑体"}},[t._v("-f ")]),t._v("  全格式")],1),t._v(" "),s("p",[s("font",{attrs:{color:"#DC4040",size:"4",face:"黑体"}},[t._v("ps -ef | grep sshd")])],1),t._v(" "),s("ul",[s("li",[t._v("BSD风格")])]),t._v(" "),s("p",[s("strong",[t._v("UID：用户 ID")])]),t._v(" "),s("p",[s("strong",[t._v("PID:   进程 ID")])]),t._v(" "),s("p",[s("strong",[t._v("PPID:  父进程ID")])]),t._v(" "),s("p",[s("strong",[t._v("C")]),t._v(":CPU用于计算执行优先级的因子。数值越大，表明进程是CPU密集型运算，执行优先级会降低;数值越小,表明进程是I/O密集型运算，执行优先级会提高")]),t._v(" "),s("p",[s("strong",[t._v("STIME")]),t._v("：进程启动的时间")]),t._v(" "),s("p",[s("strong",[t._v("TTY")]),t._v("：完整的终端名称")]),t._v(" "),s("p",[s("strong",[t._v("TIME")]),t._v(" : CPU时间")]),t._v(" "),s("p",[s("strong",[t._v("CMD")]),t._v(" : 启动线程所用的命令和参数")]),t._v(" "),s("h2",{attrs:{id:"_12-3-终止进程kill和killall"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_12-3-终止进程kill和killall"}},[t._v("#")]),t._v(" 12.3 终止进程kill和killall")]),t._v(" "),s("h3",{attrs:{id:"_12-3-1-介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_12-3-1-介绍"}},[t._v("#")]),t._v(" 12.3.1 介绍")]),t._v(" "),s("p",[t._v("若是某个进程执行一半需要停止时，或是已消了很大的系统资源时，此时可以考虑停止该进程。使用kill命令来完成此项任务。")]),t._v(" "),s("h3",{attrs:{id:"_12-3-2-基本语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_12-3-2-基本语法"}},[t._v("#")]),t._v(" 12.3.2 基本语法")]),t._v(" "),s("p",[s("font",{attrs:{color:"#DC4040",size:"4",face:"黑体"}},[t._v("kill   [选项]   进程号")]),t._v("(功能描述:通过进程号杀死/终止进程)")],1),t._v(" "),s("p",[s("font",{attrs:{color:"#DC4040",size:"4",face:"黑体"}},[t._v("killall  进程名称")]),t._v("〈功能描述:通过进程名称杀死进程，也支持通配符，这在系统因负载过大而变得很慢时很有用)")],1),t._v(" "),s("h3",{attrs:{id:"_12-3-3-常用选项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_12-3-3-常用选项"}},[t._v("#")]),t._v(" 12.3.3 常用选项")]),t._v(" "),s("p",[s("font",{attrs:{color:"#DC4040",size:"4",face:"黑体"}},[t._v("-9:表示强迫进程立即停止")])],1),t._v(" "),s("h3",{attrs:{id:"_14-3-4-最佳实践"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_14-3-4-最佳实践"}},[t._v("#")]),t._v(" 14.3.4 最佳实践")]),t._v(" "),s("blockquote",[s("p",[t._v("案例1:踢掉某个非法登录用户    "),s("strong",[t._v("kill 进程号")])]),t._v(" "),s("p",[t._v("(1) ps -aux | grep sshd")]),t._v(" "),s("p",[t._v("(2) kill 9976")]),t._v(" "),s("p",[t._v("案例2:终止远程登录服务sshd,在适当时候再次重启sshd服务     "),s("strong",[t._v("kill sshd 对应的进程号")])]),t._v(" "),s("p",[t._v("终止: kill 8137 (/user/sbin/sshd -D)")]),t._v(" "),s("p",[t._v("重启:  "),s("strong",[t._v("/bin/systemctl   start  sshd.service")])]),t._v(" "),s("p",[t._v("案例3: 终止多个gedit,演示 "),s("strong",[t._v("killall gedit")])]),t._v(" "),s("p",[t._v("案例4: 强制杀掉一个终端,指令kill -9 bash 对应的进程号")]),t._v(" "),s("p",[t._v("(1) ps -aux | grep bash")]),t._v(" "),s("p",[t._v("比如 杀死 其他的终端 kill -9 9880 (强制杀死)")])]),t._v(" "),s("h2",{attrs:{id:"_12-4-查看进程树"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_12-4-查看进程树"}},[t._v("#")]),t._v(" 12.4 查看进程树")]),t._v(" "),s("h3",{attrs:{id:"_12-4-1-基本语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_12-4-1-基本语法"}},[t._v("#")]),t._v(" 12.4.1 基本语法")]),t._v(" "),s("p",[s("font",{attrs:{color:"#DC4040",size:"4",face:"黑体"}},[t._v("pstree  [选项]")]),t._v(",可以更加直观的来看进程信息")],1),t._v(" "),s("h3",{attrs:{id:"_12-4-2-常用选项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_12-4-2-常用选项"}},[t._v("#")]),t._v(" 12.4.2 常用选项")]),t._v(" "),s("p",[s("font",{attrs:{color:"#DC4040",size:"4",face:"黑体"}},[t._v("-p")]),t._v(" :显示进程的PID")],1),t._v(" "),s("p",[s("font",{attrs:{color:"#DC4040",size:"4",face:"黑体"}},[t._v("-u")]),t._v(": 显示进程的所属用户")],1),t._v(" "),s("h3",{attrs:{id:"_12-4-3-应用实例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_12-4-3-应用实例"}},[t._v("#")]),t._v(" 12.4.3 应用实例")]),t._v(" "),s("blockquote",[s("p",[t._v("案例1: 请你树状的显示进程的pid")]),t._v(" "),s("p",[t._v("pstree -p")]),t._v(" "),s("p",[t._v("案例2: 请你树状的形式显示进程的用户")]),t._v(" "),s("p",[t._v("pstree -u")])]),t._v(" "),s("p",[s("img",{attrs:{src:v(463),alt:"1631723885527"}})]),t._v(" "),s("h2",{attrs:{id:"_12-5-服务-service-管理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_12-5-服务-service-管理"}},[t._v("#")]),t._v(" 12.5 服务(service)管理")]),t._v(" "),s("h3",{attrs:{id:"_12-5-1-介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_12-5-1-介绍"}},[t._v("#")]),t._v(" 12.5.1 介绍")]),t._v(" "),s("p",[t._v("服务(service)本质就是进程,但是是运行在后台的,通常都会监听某个端口,等待其它程序的请求,比如(mysqld , sshd防火墙等)，因此我们又称为守护进程，是Linux中非常重要的知识点。【原理图】")]),t._v(" "),s("p",[s("img",{attrs:{src:v(464),alt:"1631786043851"}})]),t._v(" "),s("h3",{attrs:{id:"_12-5-2-service-管理指令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_12-5-2-service-管理指令"}},[t._v("#")]),t._v(" 12.5.2 service 管理指令")]),t._v(" "),s("ol",[s("li",[s("font",{attrs:{color:"#DC4040",size:"4",face:"黑体"}},[t._v("service 服务名 [start|stop|restart|reload|status]")])],1),t._v(" "),s("li",[s("font",{attrs:{color:"#DC4040",size:"4",face:"黑体"}},[t._v("在CentOS7.0后，很多服务不再使用service,而是systemctl")])],1),t._v(" "),s("li",[s("font",{attrs:{color:"#DC4040",size:"4",face:"黑体"}},[t._v("service指令管理的服务在 /etc/init.d 查看")])],1)]),t._v(" "),s("p",[s("img",{attrs:{src:v(465),alt:"1631788926924"}})]),t._v(" "),s("h3",{attrs:{id:"_12-5-3-service-管理指令案例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_12-5-3-service-管理指令案例"}},[t._v("#")]),t._v(" 12.5.3 service 管理指令案例")]),t._v(" "),s("blockquote",[s("p",[t._v("请使用service指令，查看，关闭，启动network [注意:在虚拟系统演示，因为网络连接会关")]),t._v(" "),s("p",[t._v("闭]指令:")]),t._v(" "),s("p",[t._v("service network status")]),t._v(" "),s("p",[t._v("service network stop")]),t._v(" "),s("p",[t._v("service network start")])]),t._v(" "),s("h3",{attrs:{id:"_12-5-4-查看服务名"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_12-5-4-查看服务名"}},[t._v("#")]),t._v(" 12.5.4 查看服务名")]),t._v(" "),s("p",[t._v("方式1:使用"),s("font",{attrs:{color:"#DC4040",size:"4",face:"黑体"}},[t._v("setup")]),t._v("     -> 系统服务就可以看到全部.")],1),t._v(" "),s("p",[s("img",{attrs:{src:v(466),alt:"1631797527022"}})]),t._v(" "),s("p",[t._v("方式2:/etc/init.d 看到 service 指令管理的服务")]),t._v(" "),s("p",[s("font",{attrs:{color:"#DC4040",size:"4",face:"黑体"}},[t._v("ls -l /etc/init.d")])],1),t._v(" "),s("h3",{attrs:{id:"_12-5-5-服务的运行级别-runlevel"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_12-5-5-服务的运行级别-runlevel"}},[t._v("#")]),t._v(" 12.5.5 服务的运行级别(runlevel)")]),t._v(" "),s("ul",[s("li",[t._v("Linux有7种运行级别:常用的是"),s("strong",[t._v("3和5")])])]),t._v(" "),s("p",[t._v("运行级别0:系统停机状态，系统默认运行级别不能设为0，否则不能正常启动")]),t._v(" "),s("p",[t._v("运行级别1:单用户工作状态，root权限，用于系统维护，禁止远程登陆")]),t._v(" "),s("p",[t._v("运行级别2:多用户状态(没有NFS)，不支持网络")]),t._v(" "),s("p",[t._v("运行级别"),s("strong",[t._v("3")]),t._v(":完全的多用户状态(有NFS)，无界面，登陆后进入控制台命令行模式")]),t._v(" "),s("p",[t._v("运行级别4:系统未使用，保留")]),t._v(" "),s("p",[t._v("运行级别"),s("strong",[t._v("5")]),t._v(":X11控制台，登陆后进入图形GUI模式")]),t._v(" "),s("p",[t._v("运行级别6:系统正常关闭并重启，默认运行级别不能设为6，否则不能正常启动")]),t._v(" "),s("ul",[s("li",[t._v("开机的流程说明:")])]),t._v(" "),s("p",[s("img",{attrs:{src:v(467),alt:"1631798539866"}})]),t._v(" "),s("h3",{attrs:{id:"_12-5-6-centos7后运行级别说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_12-5-6-centos7后运行级别说明"}},[t._v("#")]),t._v(" 12.5.6 CentOS7后运行级别说明")]),t._v(" "),s("blockquote",[s("p",[t._v("前面学过一次，再巩固一下")])]),t._v(" "),s("p",[t._v("在 /etc/initab 进行了简化，如下：")]),t._v(" "),s("p",[s("strong",[t._v("multi-user.target")]),t._v(": analogous to runlevel 3")]),t._v(" "),s("p",[s("strong",[t._v("graphical.target")]),t._v(": analogous to runlevel 5")]),t._v(" "),s("ul",[s("li",[t._v("To view current default target, run:")])]),t._v(" "),s("p",[t._v("systemctl get-default")]),t._v(" "),s("ul",[s("li",[t._v("To set a default target, run:")])]),t._v(" "),s("p",[t._v("systemctl set-default TARGET.target")]),t._v(" "),s("h3",{attrs:{id:"_12-5-7-chkconfig-指令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_12-5-7-chkconfig-指令"}},[t._v("#")]),t._v(" 12.5.7 chkconfig 指令")]),t._v(" "),s("ul",[s("li",[t._v("基本介绍：")])]),t._v(" "),s("ol",[s("li",[s("font",{attrs:{color:"#DC4040",size:"4",face:"黑体"}},[t._v("通过chkconfig命令可以给服务的各个运行级别设置自启动/关闭")])],1),t._v(" "),s("li",[s("font",{attrs:{color:"#DC4040",size:"4",face:"黑体"}},[t._v("chkconfig指令管理的服务在/etc/init.d查看")])],1),t._v(" "),s("li",[s("font",{attrs:{color:"#DC4040",size:"4",face:"黑体"}},[t._v("注意: Centos7.0后，很多服务使用systemctl 管理")])],1)]),t._v(" "),s("ul",[s("li",[t._v("chkconfig 基本语法")])]),t._v(" "),s("ol",[s("li",[s("font",{attrs:{color:"#DC4040",size:"4",face:"黑体"}},[t._v("查看服务        chkconfig     --list[grep xxx]")])],1),t._v(" "),s("li",[s("font",{attrs:{color:"#DC4040",size:"4",face:"黑体"}},[t._v("chkconfig      服务名           --list")])],1),t._v(" "),s("li",[s("font",{attrs:{color:"#DC4040",size:"4",face:"黑体"}},[t._v("chkconfig      --level      5     服务名    on/off")])],1)]),t._v(" "),s("blockquote",[s("p",[t._v("案例演示:对network服务进行各种操作，把 network在3运行级别,关闭自启动")]),t._v(" "),s("p",[t._v("chkconfig --level 3 network off")]),t._v(" "),s("p",[t._v("chkconfig --level 3 network on")])]),t._v(" "),s("ul",[s("li",[t._v("使用细节")])]),t._v(" "),s("p",[s("strong",[t._v("chkconfig 重新设置服务后自启动或关闭，需要重启机器reboot生效")]),t._v(".")]),t._v(" "),s("h3",{attrs:{id:"_12-5-8-systemctl-管理指令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_12-5-8-systemctl-管理指令"}},[t._v("#")]),t._v(" 12.5.8 systemctl 管理指令")]),t._v(" "),s("ul",[s("li",[t._v("基本语法:")])]),t._v(" "),s("p",[s("font",{attrs:{color:"#DC4040",size:"4",face:"黑体"}},[t._v("systemctl   [start|stop|restart|status]  服务名")])],1),t._v(" "),s("p",[s("font",{attrs:{color:"#DC4040",size:"4",face:"黑体"}},[t._v("systemctl 指令管理的服务在 /usr/lib/systemd/system 查看")])],1),t._v(" "),s("blockquote",[s("p",[t._v("ls -l /usr/lib/systemd/system")])]),t._v(" "),s("h3",{attrs:{id:"_12-5-9-systemctl-设置服务的自启动状态"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_12-5-9-systemctl-设置服务的自启动状态"}},[t._v("#")]),t._v(" 12.5.9 systemctl 设置服务的自启动状态")]),t._v(" "),s("p",[s("font",{attrs:{color:"#DC4040",size:"4",face:"黑体"}},[t._v("systemctl list-unit-files [ | grep 服务名] (查看服务开机启动状态, grep可以进行过滤)")])],1),t._v(" "),s("p",[s("font",{attrs:{color:"#DC4040",size:"4",face:"黑体"}},[t._v("systemctl  enable   服务名  (设置服务开机启动)")])],1),t._v(" "),s("p",[s("font",{attrs:{color:"#DC4040",size:"4",face:"黑体"}},[t._v("systemctl  disable  服务名  (关闭服务开机启动)")])],1),t._v(" "),s("p",[s("font",{attrs:{color:"#DC4040",size:"4",face:"黑体"}},[t._v("systemctl  is-enabled    服务名(查询某个服务是否是自启动的)")])],1),t._v(" "),s("h3",{attrs:{id:"_12-5-10-应用案例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_12-5-10-应用案例"}},[t._v("#")]),t._v(" 12.5.10 应用案例")]),t._v(" "),s("blockquote",[s("p",[t._v("查看当前防火墙的状况，关闭防火墙和重启防火墙。")]),t._v(" "),s("p",[t._v("systemctl status firewalld")]),t._v(" "),s("p",[t._v("systemctl stop firewalld")]),t._v(" "),s("p",[t._v("systemctl start firewalld")])]),t._v(" "),s("h3",{attrs:{id:"_12-5-11-细节讨论"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_12-5-11-细节讨论"}},[t._v("#")]),t._v(" 12.5.11 细节讨论")]),t._v(" "),s("ol",[s("li",[s("strong",[t._v("关闭或者启用防火墙后，立即生效")]),t._v("。")]),t._v(" "),s("li",[s("strong",[t._v("这种方式只是临时生效，当重启系统后，还是回归以前对服务的设置")]),t._v("。")]),t._v(" "),s("li",[s("strong",[t._v("如果希望设置某个服务自启动或关闭永久生效，要使用systemctl     [enable|disable]   服务名")]),t._v(".")])]),t._v(" "),s("h3",{attrs:{id:"_12-5-12-打开或者关闭指定端口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_12-5-12-打开或者关闭指定端口"}},[t._v("#")]),t._v(" 12.5.12 打开或者关闭指定端口")]),t._v(" "),s("p",[t._v("在真正的生产环境，往往需要将防火墙打开，但问题来了，如果我们把防火墙打开，那么外部请求数据包就不能跟服务器监听端口通讯。这时，需要打开指定的端口。")]),t._v(" "),s("p",[s("img",{attrs:{src:v(468),alt:"1631806147056"}})]),t._v(" "),s("h3",{attrs:{id:"_12-5-13-firewall-指令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_12-5-13-firewall-指令"}},[t._v("#")]),t._v(" 12.5.13 firewall 指令")]),t._v(" "),s("ol",[s("li",[s("font",{attrs:{color:"#DC4040",size:"4",face:"黑体"}},[t._v("打开端口:firewall-cmd --permanent --add-port=端口号/协议(查看协议指令 :netstat -anp | more)")])],1),t._v(" "),s("li",[s("font",{attrs:{color:"#DC4040",size:"4",face:"黑体"}},[t._v("关闭端口:firewall-cmd --permanent --remove-port=端口号/协议号")])],1),t._v(" "),s("li",[s("font",{attrs:{color:"#DC4040",size:"4",face:"黑体"}},[t._v("打开或关闭重新载入，才能生效:firewall-cmd --reload")])],1),t._v(" "),s("li",[s("font",{attrs:{color:"#DC4040",size:"4",face:"黑体"}},[t._v("查询端口是否开发:firewall-cmd --query-port=端口/协议")])],1)]),t._v(" "),s("h3",{attrs:{id:"_12-5-14-应用案例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_12-5-14-应用案例"}},[t._v("#")]),t._v(" 12.5.14 应用案例")]),t._v(" "),s("blockquote",[s("p",[t._v("启用防火墙，测试111端口是否能telnet")]),t._v(" "),s("p",[t._v("开放111 端口")]),t._v(" "),s("p",[t._v("(1) firewall-cmd --permanent --add-port=111/tcp")]),t._v(" "),s("p",[t._v("(2)需要firewall-cmd --reload")]),t._v(" "),s("p",[t._v("关闭111端口")]),t._v(" "),s("p",[t._v("(1) firewall-cmd --permanent --remove-port=111/tcp")]),t._v(" "),s("p",[t._v("(2)需要firewall-cmd --reload")])]),t._v(" "),s("h2",{attrs:{id:"_12-6-动态监控进程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_12-6-动态监控进程"}},[t._v("#")]),t._v(" 12.6 动态监控进程")]),t._v(" "),s("h3",{attrs:{id:"_12-6-1-基本介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_12-6-1-基本介绍"}},[t._v("#")]),t._v(" 12.6.1 基本介绍")]),t._v(" "),s("p",[t._v("top与ps命令很相似。它们都用来显示正在执行的进程。Top与ps最大的不同之处，在于top在执行一段时间可以更新正在运行的的进程。")]),t._v(" "),s("p",[s("img",{attrs:{src:v(469),alt:"1631807703518"}})]),t._v(" "),s("h3",{attrs:{id:"_12-6-2-基本语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_12-6-2-基本语法"}},[t._v("#")]),t._v(" 12.6.2 基本语法")]),t._v(" "),s("p",[s("font",{attrs:{color:"#DC4040",size:"4",face:"黑体"}},[t._v("top [选项]")])],1),t._v(" "),s("h3",{attrs:{id:"_12-6-3-选项说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_12-6-3-选项说明"}},[t._v("#")]),t._v(" 12.6.3 选项说明")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("选项")]),t._v(" "),s("th",[t._v("功能")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("-d 秒数")]),t._v(" "),s("td",[t._v("指定top命令每隔几秒更新。默认是3秒")])]),t._v(" "),s("tr",[s("td",[t._v("-i")]),t._v(" "),s("td",[t._v("使top不显示任何闲置或者僵死进程")])]),t._v(" "),s("tr",[s("td",[t._v("-p")]),t._v(" "),s("td",[t._v("通过指定监控进程ID来仅仅监控某个进程的状态")])])])]),t._v(" "),s("h3",{attrs:{id:"_12-6-4-交互操作说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_12-6-4-交互操作说明"}},[t._v("#")]),t._v(" 12.6.4 交互操作说明")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("操作")]),t._v(" "),s("th",[t._v("功能")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("操作")]),t._v(" "),s("td",[t._v("功能")])]),t._v(" "),s("tr",[s("td",[t._v("P")]),t._v(" "),s("td",[t._v("以CPU使用率排序，默认就是此项")])]),t._v(" "),s("tr",[s("td",[t._v("M")]),t._v(" "),s("td",[t._v("以内存的使用率排序")])]),t._v(" "),s("tr",[s("td",[t._v("N")]),t._v(" "),s("td",[t._v("以PID排序")])]),t._v(" "),s("tr",[s("td",[t._v("q")]),t._v(" "),s("td",[t._v("退出top")])])])]),t._v(" "),s("h3",{attrs:{id:"_12-6-5-应用实例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_12-6-5-应用实例"}},[t._v("#")]),t._v(" 12.6.5 应用实例")]),t._v(" "),s("blockquote",[s("p",[t._v("案例1.监视特定用户，比如我们监控tom用户")]),t._v(" "),s("p",[t._v("top:输入此命令，按回车键，查看执行的进程。")]),t._v(" "),s("p",[t._v('u:然后输入"“u”回车，再输入用户名，即可.')]),t._v(" "),s("p",[t._v("案例2:终止指定的进程，比如我们要结束tom登录")]),t._v(" "),s("p",[t._v("top:输入此命令，按回车键，查看执行的进程。")]),t._v(" "),s("p",[t._v("k:然后输入“k”回车，再输入要结束的进程ID号")]),t._v(" "),s("p",[t._v("案例3:指定系统状态更新的时间(每隔10秒自动更新),默认是3秒")]),t._v(" "),s("p",[t._v("top -d 10")])]),t._v(" "),s("h2",{attrs:{id:"_12-7-监控网络状态"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_12-7-监控网络状态"}},[t._v("#")]),t._v(" 12.7 监控网络状态")]),t._v(" "),s("h3",{attrs:{id:"_12-7-1-查看系统网络情况"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_12-7-1-查看系统网络情况"}},[t._v("#")]),t._v(" 12.7.1 查看系统网络情况")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("基本语法")]),t._v(" "),s("p",[s("font",{attrs:{color:"#DC4040",size:"4",face:"黑体"}},[t._v("nestat [选项]")])],1)]),t._v(" "),s("li",[s("p",[t._v("选项说明")]),t._v(" "),s("p",[s("font",{attrs:{color:"#DC4040",size:"4",face:"黑体"}},[t._v("-an 按一定顺序排列输出")])],1),t._v(" "),s("p",[s("font",{attrs:{color:"#DC4040",size:"4",face:"黑体"}},[t._v("-p   显示哪个进程在调用")])],1)]),t._v(" "),s("li",[s("p",[t._v("应用案例")]),t._v(" "),s("blockquote",[s("p",[t._v("请查看服务名为sshd的服务信息")]),t._v(" "),s("p",[t._v("nestat -anp | gerp sshd")])])])]),t._v(" "),s("p",[s("img",{attrs:{src:v(470),alt:"1631810755158"}})]),t._v(" "),s("p",[s("img",{attrs:{src:v(471),alt:"1631810771119"}})]),t._v(" "),s("h3",{attrs:{id:"_12-7-2-检测主机连接命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_12-7-2-检测主机连接命令"}},[t._v("#")]),t._v(" 12.7.2 检测主机连接命令")]),t._v(" "),s("p",[t._v("基本介绍:是一种网络检测工具，它主要是用检测远程主机是否正常，或是两部主机间的网线或网卡故障。")]),t._v(" "),s("p",[t._v("基本语法: "),s("font",{attrs:{color:"#DC4040",size:"4",face:"黑体"}},[t._v("ping 对方ip地址")])],1),t._v(" "),s("blockquote",[s("p",[t._v("如: ping www.baidu.com")])]),t._v(" "),s("p",[t._v("🃏")])])}),[],!1,null,null,null);_.default=a.exports},460:function(t,_,v){t.exports=v.p+"assets/img/01.02a6ca8c.png"},461:function(t,_,v){t.exports=v.p+"assets/img/02.e8dcbe52.png"},462:function(t,_,v){t.exports=v.p+"assets/img/03.be239a64.png"},463:function(t,_,v){t.exports=v.p+"assets/img/04.bc083177.png"},464:function(t,_,v){t.exports=v.p+"assets/img/05.1b43242e.png"},465:function(t,_,v){t.exports=v.p+"assets/img/06.c0931ee4.png"},466:function(t,_,v){t.exports=v.p+"assets/img/07.2bb42477.png"},467:function(t,_,v){t.exports=v.p+"assets/img/08.fbacef9e.png"},468:function(t,_,v){t.exports=v.p+"assets/img/09.1159848c.png"},469:function(t,_,v){t.exports=v.p+"assets/img/10.5e4f85f0.png"},470:function(t,_,v){t.exports=v.p+"assets/img/11.1058d4db.png"},471:function(t,_,v){t.exports=v.p+"assets/img/12.6f1ef8b4.png"}}]);