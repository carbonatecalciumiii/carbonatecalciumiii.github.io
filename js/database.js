		var mockData = [  
			{ year: "通用数据表 每年都可以用哦", category: 'αβ', type: 'DT', name:'', content1: `All Universal Data Table`, content2:`通用数据表
<img src="img/dt1.png">
<img src="img/dt2.png">
<img src="img/dt3.png">
<img src="img/dt4.png">
<img src="img/dt5.png">`},
			{ year:'1996', category:'αβ', type:'location', name:`参赛地点信息`, content1:`Nizhnij Arkhyz Russia`,content2:`俄罗斯 尼兹尼克`},
		    { year: "1996", category: 'αβ', type: 'TH', name: '[Data Missing]', content1: '[Data Missing]', content2: '[数据缺失]'},  
		    { year: "1996", category: 'α', type: 'TH', name: '1 Telescope', content1: 'Why is it sometimes better to use a small telescope in orbit around the Earth than it is to use a large telescope on a mountain top?',content2:'为什么有时在绕地球轨道上使用小型望远镜比使用山顶上的大型望远镜效果好？' },
			{ year: "1996", category: 'α', type: 'TH', name: '2 Fly', content1: 'A thick black fly has dotten onto the object lens of a 5 cm telescope. What will an observer looking to the Moon through the telescope see?',content2:'一只大黑苍蝇落在5厘米望远镜的物镜上（视其为一个点）。通过望远镜观察月球的观察者会看到什么？'},
			{ year: "1996", category: 'α', type: 'TH', name: '3 Meteors', content1: 'Explain why we see more meteors from midnight to dawn than from evening to midnight.',content2:'解释为什么我们从午夜到黎明看到的流星比从晚上到午夜看到的要多。'},
			{ year: "1996", category: 'α', type: 'TH', name: '4 Zodiacal Signs', content1: 'The 12 Zodiacal signs are equally extended on the ecliptic. In which of them does the Sun lie in for the shortest period?', content2: '十二星座在黄道上平均分布。太阳位于哪一个区域的时间最短？'},
			{ year: "1996", category: 'α', type: 'TH', name: '5 Pluto', content1: "On 1 cm² of Pluto's surface fall approximately 10,000 photons per second from a star of the fifth magnitude. How many photons would fall on a detector from a star of 20m during half an hour, if BTA at the Earth is used (the diameter of the main mirror is 6 m)?",content2:'在冥王星（五等）1平方厘米的表面上，每秒大约有10000个光子落下。如果使用地球上的BTA（主镜的直径为6米），半小时内有多少光子会从20等的恒星落到探测器上？'},
			{ year: "1996", category: 'α', type: 'TH', name: '6 Parallax', content1: 'The sun has a parallax of θs = 8".8, and a star with the same absolute brightness - θ* = 0".022. Is it possible to observe the star at night sky visually?',content2:'太阳的视差为θs=8".8，一恒星的绝对亮度与太阳相同，其视差为θ*=0".022。有可能在夜空中肉眼观察到这颗恒星吗？'},
			{ year: "1996", category: 'α', type: 'TH', name: '7 Eclipse', content1: ' The moon set in St.Petersburg (60° North, 30° East) yesterday just at midnight. In what region of the Earth will there be an opportunity to observe a total solar eclipse sometime next week?',content2:'昨天午夜，在圣彼得堡（北纬60°，东经30°）月亮刚好落下。下周某个时候，地球上哪个地区有机会观测日全食？'},
			{ year: "1996", category: 'α', type: 'TH', name: '8 Asteroid', content1: 'A spaceship landed on an asteroid 2.2 km in diameter with an average density of 2.2 g/cm3. The asteroid is slowly rotating. The cosmonauts decided to travel along the equator of the asteroid in a rover in 2.2 hours. Will it be possible for them to do such a thing? If the answer is negative, why? If the answer is positive, what do they take into account? ',content2:'一艘宇宙飞船降落在一颗直径2.2公里、平均密度为2.2克/立方厘米的小行星上。小行星正在缓慢旋转。宇航员们决定在2.2小时内乘坐漫游车沿着小行星的赤道旅行一圈。他们有可能做成这件事吗？如果答案是否定的，为什么？如果答案是肯定的，他们会考虑什么？'},
			{ year: "1996", category: 'β', type: 'TH', name: '1 Visual Double Star', content1: 'Why might some stars appear double in blue light through they could not be resolved in red light?',content2:'为什么有些恒星在蓝光中会出现重影，而在红光中则无法分辨？'},
			{ year: "1996", category: 'β', type: 'TH', name: '2 Observation time', content1: 'Why can radio astronomers observe during the day, whereas optical astronomers are (for the most part) limited to nighttime observing?',content2:'为什么射电天文观测者可以在白天观测，而光学天文观测者（在很大程度上）只能在夜间观测？'},
			{ year: "1996", category: 'β', type: 'TH', name: '3 Telescope', content1: 'Why is it better for some purposes to use a medium size telescope on a mountain instead of a telescope on a spaceship at low orbit near the Earth? ',content2:'为什么在某些情况下，在山上使用中型望远镜比在地球附近低轨道的宇宙飞船上使用望远镜效果更好？'},
			{ year: "1996", category: 'β', type: 'TH', name: '4 HST', content1: 'What are the reasons why the Hubble Space Telescope is able to observe fainter objects than we can study from the ground?',content2:'哈勃太空望远镜能够观测到比我们从地面上研究的更暗的物体的原因是什么？'},
			{ year: "1996", category: 'β', type: 'TH', name: '5 Eclipse', content1: 'The moon set in St.Petersburg (60° North, 30° East) yesterday just at midnight. In what region of the Earth will there be an opportunity to observe a total solar eclipse sometime next week?',content2:'昨天午夜，在圣彼得堡（北纬60°，东经30°）月亮刚好落下。下周某个时候，地球上哪个地区有机会观测日全食？'},
			{ year: "1996", category: 'β', type: 'TH', name: '6 Altair', content1: 'Altair (α Aquila) has a parallax of θ = 0".198, proper motion m = 0".658/year, radial velocity Vr = -26 km/s and visible brightness m = 0m.89. When and what would be the minimum distance of Altair to the Sun? Also find the brightness of Altair at that point.',content2:'河鼓二（α Aqu）的视差为θ=0“.198，固有运动m=0”.658/年，视向速度Vr=-26km/s，可见光星等m=0m.89。河鼓二到太阳的最小距离是什么时候？河鼓二在这一点上的星等是多少？'},
			{ year: "1996", category: 'β', type: 'TH', name: '7 Keck Telescope', content1: 'Recently the Ten-meter Keck telescope began to operate on Mauna Kea (Hawaii), where the diameter of stellar images may be as small as 0".3. Can you evaluate the limiting stellar magnitude for visual observation with this telescope?',content2:'最近，10米凯克望远镜开始在莫纳克亚山（夏威夷）运行，那里的恒星图像直径可能小至0.3英寸。你能用这台望远镜评估视觉观测的极限恒星星等吗？'},
			{ year: "1996", category: 'β', type: 'DA', name: 'Elongation', content1: `Paper with a drown circle and table of maximal elongations of Mercury and Venus had been done for participants. 
<p>1. The figure show a circle, that is the orbit of Earth. By using data from the table, draw orbits of Mercury and Venus. </p>
<p>2. Estimate radii of the orbits (in a.u.).</p>`,content2:`参赛者持有一张画有圆的纸和一个水星金星大距表
<p>1.图中展示了一个圆形，即地球的轨道。通过使用表中的数据，绘制水星和金星的轨道。</p>
<p>2.估算轨道半径（单位：au）</p><img src="img/1996daf1.png">`},
			{ year: "1996", category: 'αβ', type: 'OB', name: 'Not competitive', content1: 'Not competitive' , content2: '不计入成绩'},
			{ year:'1997', category:'αβ', type:'location', name:`参赛地点信息`, content1:`Nizhnij Arkhyz Russia`,content2:`俄罗斯 尼兹尼克`},
			{ year:"1997",category:'α',type:'TH',name:'1 Magnitude',content1:'Two stars have the same absolute magnitude. One is thou-sand times farther away than the other. What is the difference in apparent magnitudes? Which magnitude larger?',content2:'两颗恒星的绝对星等相同。其中一颗比另一颗远1000倍。它们的视星等相差多少？哪颗视星等更大？'},
			{ year:"1997",category:'αβ',type:'TH',name:'2 Lunar Observer',content1:"What would an observer have seen sitting on the Moon and looking at the Earth, when the total eclipse of the Sun took place on the Solovetz Islands  (34°45'  East,  65°01'  North)  at 5 a.m. July 22, 1990? Illustrate your answer with a drawing.",content2:"1990年7月22日凌晨5点，索洛维茨群岛（东经34°45'，北纬65°01'）发生日全食时，观察者坐在月球上看着地球会看到什么？用图画说明你的答案"},
			{ year:"1997",category:'α',type:'TH',name:'3 Sidereal Day',content1:'The duration of the day on Mars is only approximately 2.5 % longer than on Earth. The orbital period of Mars is 687 days. Find (approximately) the difference between the duration of the siderial day and the mean solar day on Mars.',content2:'火星上一天的持续时间只比地球上长约2.5%。火星的轨道周期为687天。估计火星恒星日与平太阳日之间的差异。'},
			{ year:"1997",category:'αβ',type:'TH',name:'4 All-the-world Holiday',content1:'On the day of the all-the-world holiday (fortieth anniversary of the launch of the first satellite), October 4, 1997, Venus was not far from its Eastern elongation, its coordinates were approximately a = 15h20m, d = -22°. Using the above data, estimate its coordinates and position relative to the Sun on the day of the launch of the first satellite, October 4, 1957. The orbital period of Venus is 0.61521 of the tropical year.',content2:'1997年10月4日，在全世界日（第一颗卫星发射四十周年）当天，金星距离其东大距不远，其坐标约为a=15h20m，d=-22°。使用上述数据，估计1957年10月4日第一颗卫星发射当天它相对于太阳的坐标和位置。金星的轨道周期是0.61521回归年。'},
			{ year:"1997",category:'αβ',type:'TH',name:'5 Siriusian Observer',content1:'Let us consider that observer is sitting on a planet of Sirius. Which object is brigter one in "his sky": either our Sun or the stars of the Big Dipper?',content2:'有一观测者正坐在天狼星上。在“他的天空”中，我们的太阳和北斗七星哪个更亮？'},
			{ year:"1997",category:'α',type:'TH',name:'6 Sun in Zenith',content1:'Let us say that the Sun is in Zenith, if it covers the Zenith by its disc. Where is it possible to see such an event more often - in Quito (latitude = 0°) or in San-Paulo (latitude = -23.5°)? Explain.',content2:'如果太阳的视面覆盖天顶则称其位于天顶。在基多（纬度=0°）或圣保罗（纬度=-23.5°）哪里可以更频繁地看到这样的事件？作答并解释。'},
			{ year:"1997",category:'β',type:'TH',name:'1 Star Shifting',content1:'If a star is moving away from the Earth at very high speed, will the star have a continuous spectrum that appears hotter or cooler than it would if the star were at rest? Explain.',content2:'如果一颗恒星以非常高的速度远离地球，那么这颗恒星的光谱看起来会比恒星静止时更热或更冷吗？作答并解释。'},
			{ year:"1997",category:'β',type:'TH',name:'3 Star Cutter',content1:"In the course of star war one crazy civilization cut a star in two halfs (without varing substance density and its temperature). How did this lofty deed change the star's magnitude? What is the magnitude of the resulting double star compared to that of the original star?",content2:'在星球大战的过程中，一个疯狂的文明将一颗恒星一分为二（物质密度和温度不变）。这一行为是如何改变这颗恒星的大小的？与原始恒星相比，产生的双星的星等是多少？'},
			{ year:"1997",category:'β',type:'TH',name:'6 Resolving Power',content1:'What limits the resolving power of the 6-meter telescope BTA in SAO? Calculate it. Explain your calculations.',content2:'是什么限制了SAO中6米望远镜BTA的分辨率？计算并解释。'},
			{ year:"1997",category:'αβ',type:'OB',name:'Skymap',content1:`Every participant has to show all the constellations in the following parts of the sky (sky was not open, some parts of it were covered by trees): 
 <p>1. North-East.</p> 
 <p>2. South. </p>
 <p>3. North.</p>`,content2:`每位参与者都必须写出或标出天空中以下部分的所有星座（天空的部分被树木覆盖）：
<p>1.东北</p>
<p>2.南方</p>
<p>3.北方</p>`},
			{ year:"1997",category:'αβ',type:'DA',name:'Orbiting Speed',content1:'Problem is about Doppler-effect, to find velosities of two stars using their spectra and spectrum of our Sun, to estimate speed of the Earth moving around the Sun.',content2:'根据多普勒效应，利用两颗恒星的光谱和我们太阳的光谱来计算它们的速度，从而估算地球绕太阳运动的速度。'},
			{ year:'1998', category:'αβ', type:'location', name:`参赛地点信息`, content1:`Nizhnij Arkhyz Russia`,content2:`俄罗斯 尼兹尼克`},
			{ year:'1998', category:'α', type:'TH', name:'1 Lunar Sky', content1:"What can one see in the Moon's sky more often - the Sun or the Earth?",content2:'在月球的天空中，人们能更频繁地看到什么——太阳还是地球？'},
			{ year:'1998', category:'α', type:'TH', name:'2 Postal Cannon', content1:'In a new postal service a huge cannon shots a postal shell from England to New Zealand. Can you estimate the duration of the shells flight?',content2:'在一个新的邮政服务中，一门巨大的大炮从英国向新西兰发射了一枚邮政炮弹。你能估计炮弹飞行的持续时间吗？'},
			{ year:'1998', category:'α', type:'TH', name:'3 Pole Coords', content1:'It is known that the equatorial coordinates of vernal equinox are 0 hr and 0 deg. Which are the North ecliptic pole coordinates?',content2:'众所周知，春分点的赤道坐标是0小时和0度。那么北黄极坐标是什么？'},
			{ year:'1998', category:'α', type:'TH', name:'4 Solar Blackhole', content1:'Suppose that the Sun collapsed suddenly to a black hole. How would the orbital period of the Earth be affected?',content2:'假设太阳突然坍缩成一个黑洞。地球的轨道周期将受到什么影响？'},
			{ year:'1998', category:'αβ', type:'TH', name:'5 Lunar Mare', content1:'Can we distinguish the lunar Mare Crisium, which diameter is 520 km, by a naked eye?',content2:'我们能用肉眼分辨出直径为520公里的危海吗？'},
			{ year:'1998', category:'αβ', type:'TH', name:'6 M32 Magnitude', content1:'There are about of 250 millions of stars in the elliptical galaxy M32 (a satellite of Andromeda galaxy). The visual magnitude of this galaxy is 9m. If luminosities of all stars are equal, what is the visual magnitude of one star in this galaxy?',content2:'椭圆星系M32（仙女座星系的卫星）中大约有2.5亿颗恒星。这个星系的视觉星等为9米。如果所有恒星的光度都相等，那么这个星系中一颗恒星的视觉星等是多少？'},
			{ year:'1998', category:'β', type:'TH', name:`1 Moon Climate`, content1:`Is it possible to observe solar eclipses, meteors, comets, auroras, rainbows, noctilucent clouds and artificial satellites on the Moon?`,content2:`有可能在月球上观测日食、流星、彗星、极光、彩虹、夜光云和人造卫星吗？`},
			{ year:'1998', category:'β', type:'TH', name:`2 Cepheids Variables`, content1:`There are Cepheids variables in our own Galaxy as well as in other galaxies. Why was the "period-luminosity" relation first recognized for Cepheids in the Magellanic Clouds?`,content2:`在我们自己的星系和其他星系中都有造父变星。为什么麦哲伦星云中的造父变星首次被发现了周光关系？`},
			{ year:'1998', category:'β', type:'TH', name:`3 Precession`, content1:`Because precession, the vernal equinox point moves slowly (50" per year) in the sky. Along what celestial circle does it move - the equator or the ecliptic?`,content2:`因为岁差，春分点在天空中缓慢东偏（每年50"）。它沿着哪个天球大圆移动——赤道还是黄道？`},
			{ year:'1998', category:'β', type:'TH', name:`4 Satellite`, content1:`Artificial Earth satellite moves with a speed of 6.9 km/sec along the circular equatorial orbit in the direction of the Earth rotation. What is the period of the satellite appearance above any fixed equatorial point?`,content2:`人造地球卫星以6.9公里/秒的速度沿着地球自转方向的圆形赤道轨道移动。卫星的轨道周期是多少？`},
			{ year:'1998', category:'αβ', type:'DA', name:'1 Capella', content1:`The 6-meter telescope of SAO is one of a few to carry out speckle-interferometric observations of visual binary stars. The purpose is a direct measurement of stellar masses. You are proposed to estimate the masses of Capella's components, using our observational data. Capella (Alpha Aur) is a very close visual pair. Fig.1 shows a relative orbit of the component B as observed over many years by observations by different observatories. The points obtained in SAO are marked in red. The position of the component A is marked by a cross and is connected to the periastron point with a straight line. The radial velocity curves of the both components are shown in Fig.2. Capella's parallax is θ = 0".077, the revolution period of its components is P = 104d. 
1 Consider a three-dimensional model of the system allowing, in particular, for the orbital eccentricity and the inclination of the orbital plane towards 
the line of sight. 
2 Estimate the masses of the components, using the Kepler's Third Law. 
3 Consider the possible causes of the errors of your estimates.`, content2:`SAO的6米望远镜是少数对可见双星进行散斑干涉观测的望远镜之一。其目的是直接测量恒星质量。建议您使用我们的观测数据来估计五车二星系成分的质量。五车二（阿尔法奥尔）是一对非常接近的视双星。图1显示了不同天文台多年来观测到的B星的相对轨道。SAO中获得的点用红色标记。A星的位置用十字标记，并用直线连接到近心点。它们的径向速度曲线如图2所示。五车二的视差为θ=0“.077，其双星的旋转周期为P=104d。
1 考虑系统的三维模型，特别考虑轨道偏心率和轨道平面朝向
视线。
2 使用开普勒第三定律估算组件的质量。
3 考虑一下你估计误差的可能原因。`},
			{ year:'1998', category:'αβ', type:'DA', name:'2 Galaxies', content1:`Edge-on spiral galaxies are suitable for the determination of their masses. Prof. I.D.Karachentsev and his colleagues complied a cataloge of such galaxies and obtained their mass spectroscopically. The spectrum of one galaxy, FGC 1908 in Dragon, is given below. It was obtained on the 4-th of March 1997, with the help of a spectrograph installed at the primary focus of the 6-meter telescope. As the figure shows, the spectrograph slit was aligned with the major axis of the galaxy. Vertical lines crossing the spectrum are emission from the night sky. Other emissions belong to the galaxy. Their laboratory wavelengths are indicated. When determining the galaxy's mass at the SAO the Hubble constant was taken to be H = 74 km/(s·Mpc).
You are required to repeat the estimate of the galaxy's mass. Recall that 1 pc = 3.09·10^18cm, the mass of the Sun is M = 2·10^33g and the gravity constant is G = 6.67·10^-8 dyn·cm^2/g^2
1 Explain why a two-dimensional spectrum of the galaxy looks exactly like that. 
2 Estimate the mass of FGC 1908 and compare it to the mass of our galaxy. 
3 Consider the possible causes of the errors of your estimates.`, content2:`侧向漩涡星系适合测定它们的质量。I.D.Karachentsev教授和他的同事们编制了一份此类星系的目录，并通过光谱法获得了它们的质量。天龙座星系FGC 1908的光谱如下。它是在1997年3月4日，在安装在6米望远镜主焦点处的光谱仪的帮助下获得的。如图所示，光谱仪狭缝与星系长轴对齐。穿过光谱的垂直线是夜空的发射。其他排放物属于银河系。标明了它们的实验室波长。在确定SAO处星系的质量时，哈勃常数被取为H=74 km/（s·Mpc）。
你需要估计星系质量。常数表：1 pc=3.09·10^18cm，太阳的质量为M=2·10^33g，重力常数为G=6.67·10^-8 dyn·cm^2/g^2
1解释为什么星系的二维光谱看起来完全一样。
2估算FGC 1908的质量，并将其与我们银河系的质量进行比较。
3考虑一下你估计误差的可能原因。`},
			{ year:'1998', category:'αβ', type:'OB', name:'1 Sun OB', content1:`1 With the help of a "school telescope" examine and draw the detailes visible on the disk of the Sun. Orientate the Sun according to the cardinal points. 
2 Identify the details of your picture with the details of one-dimentional radiosections of the Sun fulfilled in previous days with RATAN-600. 
Radio observations were carried out at noon, the knife beam was directed vertically and covered all disk of the Sun.`, content2:`1 在“学校望远镜”的帮助下，检查并绘制太阳盘面上可见的细节。根据基点确定太阳的方向。
2 用前几天用RATAN-600完成的太阳一维辐射切片的细节来识别你的照片的细节。
中午进行了无线电观测，刀束垂直指向并完全覆盖了太阳的圆盘。`},
			{ year:'1998', category:'αβ', type:'OB', name:'2 The Star Splitter', content1:`...That telescope was christened the Star-Splitter, 
Because it didn't do a thing but split 
A star in two or three, the way you split 
A globule of quicksilver in your hand 
With one stroke of your finger in the middle... 
Robert Frost "The Star-Splitter" 
 
With the help of a "school telescope" find in the sky and divide several (not more than 5) binaries into components. 
Pay attention to the brightness and colours of the components. 
Explain the observed relation between the brightness and colors of the components 
(fill the table below).`, content2:`…那台望远镜被命名为恒星分离器，
因为它什么也没做，只是分裂了
两颗或三颗星星，就像
你手里拿着一滴水银
用你的手指在中间划一下。。。
罗伯特·弗罗斯特《恒星分裂者》
 
在“学校望远镜”的帮助下，在天空中发现并将几个（不超过5个）双星分成多个部分。
注意部件的亮度和颜色。
解释观察到的双星亮度和颜色之间的关系
（填写下表）。
<img src="img/1998obf1.png">`},
{ year:'1999', category:'αβ', type:'location', name:`参赛地点信息`, content1:` Nauchnyj Crimea`,content2:`克里米亚 诺奇内依`},
{ year:'1999', category:'α', type:'TH', name:`1 Moon's image`, content1:`The apparent diameter of the Moon, as seen from the Earth, is 31'. What is the image diameter in the objective focal plane if its focal length is 254 cm and the objective diameter is 40 cm? Draw a figure (a few figures) to explain your calculations.`,content2:`从地球上看，月球的表观直径为31'。如果物镜焦距为254厘米，物镜直径为40厘米，那么物镜焦平面中的图像直径是多少？画一个图（几个图）来解释你的计算。`},
{ year:'1999', category:'α', type:'TH', name:`2 Photometer`, content1:`A photometer is mounted on a 125 cm (focal length) telescope. Can you observe a star with magnitude 5m or 10m or 15m in a cluster if a count from a star of a similar spectral type with magnitude 8m gives 4000 counts/second? The level of white noise of the photometer (instrumental noise) is 500 counts/second; the upper limiting value for observations is 200000 counts/second. Explain your calculations.`,content2:`光度计安装在125厘米（焦距）的望远镜上。如果一颗类似光谱类型的8等恒星的流量为每秒4000光子，你能在星团中观察到一颗5等、10等或15等的恒星吗？光度计的白噪声水平（仪器噪声）为500光子/秒；观测的上限值为200000光子/秒。解释一下你的计算。`},
{ year:'1999', category:'β', type:'TH', name:`1 Star Peaks`, content1:`One star peaks at 2000 A. Another peaks at 10000 A. Which one emits more radiation at 2000 A? Which one emits more radiation at 10000 A? What is the ratio of the total radiation emitted by the two stars? Consider the stars as black bodies.`,content2:`一颗恒星光谱的峰值在2000 A。另一颗恒星在10000 A。哪颗恒星在2000 A时发出的辐射更多？哪一个在10000A时发射的辐射更多？这两颗恒星发出的总辐射的比例是多少？将恒星视为黑体。`},
{ year:'1999', category:'β', type:'TH', name:`2 Ship Reusing`, content1:`Engineers from the Simferopol University describe a new method to utilize old military ships: to construct very small black holes from their material (patent yzarc-048UA7). Estimate the diameter of a black hole constructed using this patent from a ship with the mass of 5000 tn (1 tn = 1000 kg). What physical object has a size of the same order of magnitude? Describe propagation of visible light near this black hole.`,content2:`辛菲罗波尔大学的工程师描述了一种利用旧军舰的新方法：用它们的材料构建非常小的黑洞（专利yzarc-048UA7）。估算使用该专利从质量为5000 tn（1 tn=1000 kg）的船上构建的黑洞的直径。什么物理对象的大小是相同数量级的？描述可见光在黑洞附近的传播。`},
{ year:'1999', category:'αβ', type:'TH', name:`3 Sunrise`, content1:`Where (on the Earth) and when is it possible to observe the sunrise with the longest duration? Estimate its duration.`,content2:`地球上何处和什么时候可以观察到持续时间最长的日出？估计它的持续时间。`},
{ year:'1999', category:'αβ', type:'TH', name:`4 Circumpolar Stars`, content1:`Usually we consider that there are about 6000 stars in the whole sky which are visible by our eyes. Estimate, how many visible stars are circumpolar (which means that they never set) if you are placed 1° from the North Pole or if you are placed 1° from the Equator (to the North). Note: formula for sphere's area calculation: S = 4πR²`,content2:`通常我们认为整个天空中大约有6000颗星星，我们的眼睛可以看到。估计一下，如果你离北极1°，或者离赤道1°（向北），有多少可见恒星是绕极的（这意味着它们永远不会落下）。注：球体面积计算公式：s=4πR²`},
{ year:'1999', category:'αβ', type:'TH', name:`5 Sunship`, content1:`An airship started from a cosmodrome located near the equator of the earth at the moment of a sunset. A pilot of the airship wants to continue to observe the sun on the horizon. What should the speed of moving of the airship be? Describe in detail the motion of the air ship.`,content2:`日落时分，一艘飞艇从地球赤道附近的一个航天发射场起飞。飞艇的飞行员想继续观察地平线上的太阳。飞艇的移动速度应该是多少？详细描述飞艇的运动。`},
{ year:'1999', category:'αβ', type:'TH', name:`6 Eclipse`, content1:`Suppose that a total solar eclipse is observed from a place at the equator when the sun is in zenith. Also, suppose that the shadow of the moon moves along the equator. Calculate the speed of the shadow relative to the observer.`,content2:`假设当太阳处于天顶时，从赤道的一个地方观测到日全食。假设月球的阴影沿着赤道移动。计算阴影相对于观察者的速度。`},
{ year:'1999', category:'αβ', type:'DA', name:`7 Observe Plan`, content1:`Write the observational program for this night on a 40-cm telescope. What stars would you observe this nigth? Write sequence of the observations. Details please see Chinese informations`,content2:`写出今晚用40cm望远镜观测的观测程序。今晚你会看到什么星星？写出观察结果的顺序。要观察的星星：
<img src="img/1999daf1.png">
月亮升起：21:17:26，相位0.77
LT=0h的当地恒星时s0=0:31:04
您可以使用所有观察时间（从20时到次日5时30分）。
当地时间LT=UT+3
天文台坐标λ=2h16m φ=44°43'
将您的结果填入表格中：
<img src="img/1999daf2.png">
无法纳入该计划的明星：
解释和注释：`},
{ year:'1999', category:'αβ', type:'DA', name:`8 Star Eclipse`, content1:`A ligth curve of eclipsing binary is shown in the figure. Estimate the ratio of R/r in assuming that the eclipse is central and the small component is fainter.`,content2:`图中显示了食双星的光度曲线。假设它们发生了全食，双星中较小的那颗较暗，估计双星半径比。
<img src="img/1999daf3.png">`},
{ year:'2000', category:'αβ', type:'location', name:`参赛地点信息`, content1:`Nizhnij Arkhyz Russia`,content2:`俄罗斯 尼兹尼克`},
{ year:'2000', category:'α', type:'TH', name:`1 Calendar`, content1:`As you know, the most widely used calendar in the middle centuries was Julian. Just now most countries use the Gregorian calendar and the difference between Julian and Gregorian calendars is 13 days: for the same days dates in the Julian calendar fall behind the dates in the Gregorian calendar by 13. Last time the dates in these calendars coincided were in the 3rd century. Calculate in what century such a difference will be 1 year and the 22nd of October (for example) in Gregorian calendar will coincide with the 22nd of October in the Julian once again.`,content2:`正如你所知，在中世纪使用最广泛的日历是儒略历。现在大多数国家都使用公历，儒略历和格里高利历之间的区别是13天：对于同一天，儒略日历中的日期比格里高利日历中的时间落后13天。上一次这些日历中的日期重合是在3世纪。计算出在哪个世纪，这样的差异将是1年，公历的10月22日（例如）将再次与儒略历的10月23日重合。`},
{ year:'2000', category:'α', type:'TH', name:`2 Star Cognition`, content1:`Two stars have the same apparent magnitude and are of the same spectral type. One is twice as far away as the other. What is the relative size of the two stars?`,content2:`两颗恒星的视星等相同，光谱类型也相同。一个是另一个的两倍远。这两颗恒星的相对大小是多少？`},
{ year:'2000', category:'β', type:'TH', name:`1 Quasar`, content1:`A quasar is observed and it is found that a line whose rest wavelength is 3000 A is observed at 15000 A. 
Estimate: 
a) How fast is the quasar receding? 
b) How far away is it if its distance is given by the Hubble relation (The Hubble constant is H = 75 km/s/Mpc)? 
Both answers should be done with an accuracy of 30 %.`,content2:`观测到一个类星体，发现在15000 A处观测到一条静止波长为3000 A的线。
估计：
a） 类星体后退的速度有多快？
b） 如果它的距离由哈勃关系给出（哈勃常数为H=75公里/秒/百万秒差距）？
这两个答案的准确率都应该达到30%。`},
{ year:'2000', category:'β', type:'TH', name:`2 Black cats`, content1:`Young scientists from the Komi-Republic territory (in the Russian Federation) registered a few days ago a new object looking like an eclipsing binary star. But the period of this star was not stable: the stellar magnitude of the object is usually equal to 24.32m. Once every 7-11 seconds it is rising to 24.52m for 0.2-0.3 seconds. After investigations it was clear that the shining object is eyes of a group of absolutely black cats sitting on a small absolutely black body in our Solar System and looking towards the Sun! And one of the cats is blinking! Calculate the number of cats in the group sitting on the small body and looking to the Sun. Draw a picture explaining your solution. Consider that all the cats are equal in size.`,content2:`几天前，来自科米共和国领土（俄罗斯联邦）的年轻科学家登记了一个看起来像食双星的新物体。但这颗恒星的周期并不稳定：该天体的恒星星等通常等于24.32等。每7-11秒上升一次，达到24.52等，持续0.2-0.3秒。经过调查，很明显，这个闪闪发光的物体是一群绝对黑色的猫的眼睛，它们坐在我们太阳系中一个绝对黑色的小身体上，看着太阳！其中一只猫在眨眼！计算看太阳的猫的数量。画一幅画解释你的解题思路。所有猫的体型都是相等的。`},
{ year:'2000', category:'αβ', type:'TH', name:`3 Moon's Picture`, content1:`There are two photos of the Moon taken by the same camera mounted on the same telescope (the telescope is placed on the Earth). The first photo has been made while the Moon was near its perigee and the second one – near the apogee. Find from these data the value of the Moon's orbit eccentricity. Estimate the minimal period between the moments at which these two photos could be taken. `,content2:`有两张月球照片是由安装在同一台望远镜上的同一台相机拍摄的（望远镜放置在地球上）。第一张照片是在月球接近近地点时拍摄的，第二张是在远地点附近拍摄的。从这些数据中找出月球轨道偏心率的值。估计拍摄这两张照片之间的最短时间。<img src="img/2000thf1.png">`},
{ year:'2000', category:'αβ', type:'TH', name:`4 Lunarnaut`, content1:`A cosmonaut in a spacecraft is moving over the Moon surface through the Mare Frigoris at an altitude of 100 km. An astronaut is walking on the Moon's surface at Mare Frigoris and it is daytime at that place (the Sun is shining). Can the cosmonaut register the astronaut using binoculars with a magnification of 20x. Take into account all the possibilities.`,content2:`一名宇航员乘坐宇宙飞船在100公里的高度通过弗里戈里斯海在月球表面移动。一名宇航员在弗里戈里斯海正行走在月球表面，当时是白天。宇航员能用放大20倍的双筒望远镜分辨宇航员吗。考虑到所有的可能性。`},
{ year:'2000', category:'αβ', type:'TH', name:`5 Olympia`, content1:`There is a radio source placed on a satellite of some planet named "Olympia". The radio source is working all the time but an observer does not register the signal all the time due to eclipses. The figure shows the level of the receiving signal by the observer vs time. Find from these data the average density of the planet. Take into account that the orbit of the satellite is circular, the observer is in the plane of the satellite's orbit and "Olympia" is far away from the observer.`,content2:`在一颗名为“奥林匹亚”的行星的卫星上放置了一个无线电源。无线电源一直在工作，但由于日食，观察者并没有一直记录信号。该图显示了观察者接收信号的电平与时间的关系。从这些数据中找出该行星的平均密度。考虑到卫星的轨道是圆形的，观察者在卫星轨道的平面内，“奥林匹亚”距离观察者很远。`},
{ year:'2000', category:'αβ', type:'TH', name:`6 Schmidt Camera`, content1:`An 1.2-meter Schmidt camera has a 6° × 6° field of view. Estimate how many photographs you would have to take to cover the whole sky. (Please, make an estimation of the maximum and minimum number of photos.) Explain your calculations. Where do you have to place your telescope to be able to do this?`,content2:`1.2米施卡镜上有相机，其视场为6°×6°。估计一下你需要拍多少张照片才能覆盖整个天空。（请估计照片的最大和最小数量。）解释你的计算。你必须把望远镜放在哪里才能做到这一点？`},
{ year:'2000', category:'αβ', type:'DA', name:`[信息/Information]`, content1:`Figures of DA is not Available.`,content2:`DA的图全都不可用。`},
{ year:'2000', category:'αβ', type:'DA', name:`1 Supernova`, content1:`Introduction: 
﻿
Special Astrophysical Observatory of Russian Academy of Sciences participates in an international program on investigation of supernovas bursting in distant galaxies. Stellar magnitudes of supernovas are measured with the help of CCD at 1-meter and 60-centimeter telescopes. For the brightest of galaxies the spectra are also obtained. Fig.1 presents a recent sample of a CCD image obtained with the 60-centimeter telescope. It was taken on October 7, 2000. It shows a part of a galaxy cluster, in one of which a supernova burst. Galaxies are marked with the letter G. Their images differ from sharp images of stars by fuzzy edges. The visible stellar magnitudes of two brightest galaxies and the supernova (it is marked with the letters SN) are indicated. 
﻿
And now the task itself: 
﻿
In Fig.2 is shown an image of a spiral galaxy NGC 3184 in which on December 10, 1999 a supernova was noticed. The image was taken before the burst! You can see stars up to 23rd magnitude in it. Fig.3 is a CCD image with a part of the galaxy and the supernova taken on January 28, 2000 with the 1-meter telescope of SAO. Galaxy NGC 3184 is in the constellation of Ursa Major. Its coordinates (1950) are as follows: α = 10h15m, δ = 41° 40´. It is similar to the famous galaxy of M33 in the Triangle (M33 is closer to us, the distance to it is 700 kpc, its angular size is about 50´). By the images of 28.01.2000 in SAO the apparent stellar magnitudes of the supernova in blue, green and red filters were determined. Its apparent stellar magnitude was 14m.67. 
1 Find the supernova in Fig.3. 
2 Estimate its absolute magnitude. 
3 Professional astronomers don't doubt that they deal with a supernova. In particular, a spectrum was obtained, by which it was assigned to type II. But nevertheless – for non-professionals – prove that it is not a burst of a nearby (foreground)-star on the background of a galaxy.`,content2:`引言：

俄罗斯科学院特殊天体物理天文台参与了一项研究遥远星系超新星爆发的国际计划。超新星的恒星星等是在1米和60厘米望远镜的CCD的帮助下测量的。对于最亮的星系，也可以获得光谱。图1显示了用60厘米望远镜获得的CCD图像的最新样本。拍摄于2000年10月7日。它显示了星系团的一部分，其中一个星系团爆发了超新星。星系用字母G标记。它们的图像与恒星的清晰图像不同，边缘模糊。显示了两个最亮星系和超新星（用字母SN标记）的可见恒星星等。

题目：

图2显示了螺旋星系NGC 3184的图像，其中在1999年12月10日发现了一颗超新星。这张照片是在爆炸前拍的！你可以在其中看到高达23等的恒星。图3是2000年1月28日用SAO的1米望远镜拍摄的带有星系和超新星一部分的CCD图像。星系NGC 3184位于大熊座。其坐标（1950）如下：α=10h15m，δ=41°40´。它类似于著名的三角星系M33（M33离我们更近，距离为700 kpc，角尺寸约为50´）。根据2000年1月28日SAO的图像，确定了这颗超新星在蓝色、绿色和红色滤光片中的视星等。它的视星等为144.67。
1 在图3中找到超新星。
2 估计它的绝对大小。
3 专业天文学家毫不怀疑他们处理的是超新星。特别是，获得了一个光谱，通过该光谱将其归为II型。但尽管如此，对于非专业人士来说，证明它不是星系背景上附近（前景）恒星的爆发。`},
{ year:'2000', category:'α', type:'DA', name:`2 Moon Drilling`, content1:`Introduction: 
﻿
Dear students, you are to see the first colonies on the Moon. The areas of the Moon surface consisting of oxygen-bearing rock are already being searched for them. First of all these are ilmenite basalts. Beside oxygen (10% from the weight) the ilmenite (FeTiO3) can give a pure iron. With the help of the radio telescope RATAN-600 a "radio drilling" of the Moon was carried out: unlike the visible light, radio waves come from under its surface. The depth of the "drilling" increases with the increase of wavelength. At the wavelength of 1 cm the Moon is transparent down to 0.5 m, at 30 cm – down to 10 m. The regions with increased content of ilmenite are also distinguished by an increased radio emission level. Fig.1 presents radio cuts of the Moon obtained at its passage through the "knife" beams of RATAN. From the 6 used wave lengths only 3 are presented, since the cut at 2.1 cm almost repeats the cut at 1.4 cm, and the cuts at 3.9 and 31 cm differ little from the cut at 8.2 cm. The last could be said also about 13-cm cut, but at the moment of observation the transmitters left at the Moon by American astronauts were operating, exactly at this wavelength. The cuts at different wavelengths can be compared both to each other and to the seas and continents known to you in the image of the Moon in visible light. A band covered in the observations at 1.4 cm is marked in it. In other wavelengths the beams cover the entire disk of the Moon in altitude. The positions of transmitters operating at the wavelength of 13 cm are also shown.
 
Task: 
﻿
1 What transmitters were operating at the moment of observation? 
2 What is the difference in the image of the Moon in cm wavelength from its image in visible wavelengths? What is the reason for it? 
3 What region would you recommend for the settlement of first colonies?`,content2:`引言：

亲爱的学生们，你们将看到月球上的第一批殖民地。月球表面由含氧岩石组成的区域已经在寻找它们。首先是钛铁矿玄武岩。除了氧气（重量的10%）外，钛铁矿（FeTiO3）还可以产生纯铁。在RATAN-600射电望远镜的帮助下，对月球进行了“无线电钻探”：与可见光不同，无线电波来自月球表面下方。“钻孔”的深度随着波长的增加而增加。在1厘米的波长下，月球在0.5米以下是透明的，在30厘米至10米的波长下也是透明的。钛铁矿含量增加的区域也以无线电发射水平的增加而闻名。图1显示了月球通过拉坦的“刀”形光束时获得的无线电切割。从6个使用的波长中，只显示了3个，因为2.1厘米的切割几乎重复了1.4厘米的切割，3.9厘米和31厘米的切割与8.2厘米的切割相差不大。最后一个也可以说是13厘米的切割。但在观察的那一刻，美国宇航员留在月球上的发射器正是在这个波长下运行的。不同波长的切割可以相互比较，也可以与可见光下月球图像中已知的海洋和大陆进行比较。其中标记了观测中1.4厘米处覆盖的波段。在其他波长下，光束覆盖了月球整个高度。还显示了在13cm波长下工作的发射器的位置。
 
任务：

1 观察时，哪些发射机正在运行？
2 月球的厘米波长图像与可见光波长图像有什么区别？原因是什么？
3 你建议在哪个地区建立第一批殖民地？`},
{ year:'2000', category:'β', type:'DA', name:`2 Cat-Eye Nebula`, content1:`Introduction: 
﻿
Planetary nebula NGC 6543 ("Cat eye") played its special part in the history of astrophysics. On August 16, 1865, an English amateur astronomer William Heggins looked at it with a spectroscope and, as he writes, "did not see an expected total spectrum, but only one bright line!" Shortly after it was resolved into two lines with the wavelengths of 4959 å and 5007 å. Heggins assigned it to a new element "nebulium". Later it was found out that these are "forbidden" lines of doubly ionized oxygen that were never observed before - neither in terrestrial laboratory nor in stars. Unlike "permitted" lines, only a very thin gas emits such lines. Recall that if an atom is neutral, then a Roman numeral I follows the symbol of its chemical element, if the atom lost one electron then it is Roman II, etc…. for example, the neutral nitrogen is N I, the ionized nitrogen is N II. In notation of forbidden line the symbols of atoms and ions are taken in square brackets, for example: the ionized nitrogen is [N II], doubly ionized oxygen is [O III]. The spectrum of the central star generating the nebula NGC 6543 and exciting its glow, as well as the spectrum of the nebula itself were obtained in the course of study of the late stages of stellar evolution. The high-resolution spectrograph of the 6-meter telescope of SAO was used. The star and a peripheral part of the nebula were alternately projected onto its slit. These positions of the slit marked by a sign ' * ' for the first one and by a sign ' @ ' for the second one in Fig 1a, 1b, 1c. 
﻿
Task: 
﻿
1 The upper parts of Fig. 1a, 1b, 1c show the parts of spectra as intensity vs wavelength given from the mentioned regions. In each of them the interesting lines are selected, and their profiles of are presented in the lower fragments as a relation between intensity and radial velocity. The figures show also the values of radial velocities measured by the tops of profiles of separate lines. 
2 Determine which lines belong to the star and which to the nebula; fill in the appended table:
3 What is the difference between them? 
4 What can be said about the character of motion in the nebula and in the star's atmosphere from the form of the line profiles? 
5 Estimate the velocity of these motions.`,content2:`引言：

行星状星云NGC 6543（“猫眼”）在天体物理学史上扮演着特殊的角色。1865年8月16日，英国业余天文学家威廉·赫金斯用分光镜观察了它，正如他所写，“没有看到预期的总光谱，只有一条明亮的线！”不久后，它被分解为波长为4959奥和5007奥的两条线。赫金斯将其归为新元素“星云”。后来发现，这些是以前从未在地球实验室或恒星中观测到的双电离氧的“禁止”线。与“允许”的线条不同，只有非常薄的气体才会发出这样的线条。回想一下，如果一个原子是中性的，那么它的化学元素符号后面跟着一个罗马数字I，如果原子失去了一个电子，那么它就是罗马数字II，以此类推…。例如，中性氮是N I，电离氮是N II。在禁止线的符号中，原子和离子的符号放在方括号中，例如：电离的氮是[N II]，双电离的氧是[O III]。在研究恒星演化后期的过程中，获得了产生星云NGC 6543并激发其光芒的中心恒星的光谱，以及星云本身的光谱。使用SAO 6米望远镜的高分辨率光谱仪。恒星和星云的外围部分交替投影到它的狭缝上。在图1a、1b、1c中，第一个狭缝的这些位置用符号“*”标记，第二个狭缝用符号“@”标记。

任务：

1 图1a、1b、1c的上部显示了上述区域给出的强度与波长的光谱部分。在每个碎片中，都选择了有趣的线条，并在较低的碎片中显示了它们的轮廓，作为强度和径向速度之间的关系。这些图还显示了由单独线条轮廓顶部测量的径向速度值。
2 确定哪些线属于恒星，哪些属于星云；填写附表：
<img src="img/2000daf1.png">
3 它们之间有什么区别？
4 从线轮廓的形式可以推出什么关于星云和恒星大气中的运动特征？
5 估算这些运动的速度。
`},
{ year:'2000', category:'α', type:'OB', name:`1 Day Observer`, content1:`Introduction: 
﻿
You cannot see stars at daytime with a naked eye. And can they be seen with a telescope? If yes, explain why? Write here your explanation: 
You have an opportunity to test that with the help of a guide of 1-meter telescope of SAO. Its objective-glass diameter is 20 cm, focus distance is 3 m, and field of seeing is 21´. 
﻿
Preparation to observation. 
﻿
1 Using the map of stars, select a star. 
2 Point here your object: 
3 Its coordinates: 
﻿
Observation. 
﻿
An operator input the coordinates of your object into a computer controlling the 1-m telescope. After the telescope is pointed on it, check if it is seen into the guide. 
The winner of the observational round competition is one who sees the faintest star at a minimum distance from the Sun.
﻿`,content2:`引言

白天用肉眼看不到星星。用望远镜能看到它们吗？如果是，请解释原因？在这里写下你的解释：
您有机会在SAO 1米望远镜的引导下进行测试。它的物镜直径为20厘米，焦距为3米，视场为21'。

准备观察

1 使用星图，选择一颗恒星。
2 在这里指出你的对象：
3 其坐标：

观察

操作员将物体的坐标输入到控制1米望远镜的计算机中。将望远镜对准后，检查是否能从导轨中看到它。
观测轮比赛的获胜者是在离太阳最小距离处看到最微弱恒星的人。
`},
{ year:'2000', category:'αβ', type:'OB', name:`2 Telescope Operation`, content1:`Photo 1. 
What nebulae do you recognize? 
Why most of them are red, but some are blue? 
Photo 2. 
What stellar clusters are seen in the photo? 
What constellations do the photo borders cross? 
What part of the Galaxy is seen in Photo 1 and 2? 
Photo 3. 
What objects are seen in the photo, their names or at least the types? 
In what region of the Galaxy they are? 
Photo 4. 
Australian aborigines call this system of dark nebulae "Emu" (Australian ostrich). 
In what constellations are its body, neck and head? 
What object of the photo is the nearest and the most distant?`,content2:`照片1。
你认识哪些星云？
为什么它们中的大多数是红色的，但有些是蓝色的？
照片2。
照片中看到了哪些星团？
照片的边界跨越了哪些星座？
在照片1和2中可以看到银河系的哪个部分？
照片3。
照片中看到了哪些物体，它们的名字，或者至少是类型？
它们位于银河系的哪个区域？
照片4。
澳大利亚土著人称这个暗星云系统为“Emu”（澳大利亚鸵鸟）。
它的身体、脖子和头部在哪个星座？
照片中哪个物体最近，哪个物体最远？`},
{ year:'2003', category:'αβ', type:'location', name:`参赛地点信息`, content1:` Stockholm Sweden<br>λ=18°4'7"E<br>φ=59°19'46"N<br>UTC +1`,content2:`瑞典斯德哥尔摩<br>东经18°4'7"<br>北纬59°19'46"<br>东一区`},
{ year:'2003', category:'αβ', type:'TH', name:`1 Sputnik`, content1:`Today is the 46th anniversary of the start of the "cosmic era". History changed on October 4, 1957, when the world's first artificial satellite, Sputnik I, was successfully launched. It was about the size of a basketball, a sphere of 580 mm in diameter with a mass of 83.6 kg and a 2 mm thick surface of highly polished aluminium alloy. The Russian word "sputnik" means "companion" ("satellite" in the astronomical sense). Sputnik I had an elliptical orbit – at perigee, just after launch, it was 227 km from the Earth's surface, and 945 km at apogee. It remained in orbit until January 4, 1958. Estimate (with necessary figures and calculations), whether was it possible to observe the satellite with the naked eye.`,content2:`今天是“宇宙时代”开始46周年。1957年10月4日，世界上第一颗人造卫星Sputnik I成功发射，历史发生了变化。它大约有一个篮球那么大，是一个直径580毫米、质量83.6公斤的球体，表面有2毫米厚的高度抛光的铝合金。俄语单词“sputnik”的意思是“伴侣”（天文学意义上的“卫星”）。斯普特尼克一号的轨道是椭圆形的——在近地点，发射后不久，它距离地球表面227公里，远地点945公里。它一直在轨道上运行到1958年1月4日。估计（用必要的数字和计算），是否有可能用肉眼观察卫星。`},
{ year:'2003', category:'αβ', type:'TH', name:`2 Stellar Astronomer`, content1:`Estimate with order-of-magnitude accuracy how many degrees it would be possible to raise temperature of water in a normal swimming pool (50 × 20 × 2 m) if one was able to collect all energy which "stellar" astronomers used untill to obtaining knowledge about the structure of the Universe, observing at night on optical telescopes. The heat capacity of water is 4200 J/(kg·K). The Total Solar Irradiation Constant is equal to 1.37 kW/m2. List in a table all the parameters and assumptions you have used in your solution.`,content2:`如果一个人能够收集“恒星”天文学家在获得宇宙结构知识之前使用的所有能量，并在夜间用光学望远镜观察，那么以数量级精度估计一个普通游泳池（50×20×2米）中的水温可能升高多少度。水的热容量为4200 J/(kg·K)。太阳总辐射常数等于1.37 kW/m2。在表格中列出你在解决方案中使用的所有参数和假设。`},
{ year:'2003', category:'αβ', type:'TH', name:`3 Animal Astronomer`, content1:`The White Bear from the previous International Astronomy Olympiad is still sitting at the North Pole. But this year a follower has appeared – a Penguin sitting at South Pole. Recently, after the ending of polar night, the Penguin observed the sunrise. What did the Bear observe at this time? Draw what the White Bear saw at the moment when the Penguin observed exactly half of the solar disk on the horizon. Assume that the Earth is spherical. The answer should be explained by drawing a figure with an image of the Bear on North Pole; necessary sizes or angular sizes should be in the picture. Recollect for yourself the necessary information about the animals.`,content2:`上一届国际天文学奥林匹克竞赛的白熊仍然坐在北极。但今年出现了一个追随者——一只坐在南极的企鹅。最近，在极夜结束后，企鹅观察了日出。此时，熊观察到了什么？画出当企鹅在地平线上观察到太阳盘的一半时，白熊看到了什么。假设地球是球形的。答案应该通过画一个北极熊的形象来解释；图片中应该有必要的尺寸或角度尺寸。为自己收集有关动物的必要信息。`},
{ year:'2003', category:'β', type:'TH', name:`4 Marsian Opposition`, content1:`The Great Opposition of Mars took place this year on August 28 at 17h56m UT. The next Great Opposition of Mars will take place in summer 2018. Somebody did not understand and, instead, imagined that 2018 will be the year not for the next Great Opposition but simply next opposition. Find parameters of the orbit of such a hypothetical planet, «Mars-2», and estimate its magnitude visible from Earth during the mean opposition. Consider the orbit of «Mars-2» to be circular and its physical characteristics the same as for Mars.`,content2:`火星大冲发生在今年8月28日17:56m UT。下一次火星大冲将发生在2018年夏天。有人不明白，相反，他们认为2018年不是下一个大冲的年份，而只是下一个冲日的一年。找到这样一颗假想行星“火星-2”的轨道参数，并估计其在平均冲日期间从地球上可见的星等。考虑“Mars-2”的轨道是圆形的，其物理特性与火星相同。`},
{ year:'2003', category:'β', type:'TH', name:`5 Solar Observation`, content1:`Every day an astronomer makes observations at the same moment of the Local Sidereal Time, and always notices the Sun just on the mathematical horizon. Where and when the observations are carried out? Your answer must contain both explanations and explicit figures (possible coordinates, etc.)`,content2:`天文学家每天都会在本地恒星时的同一时刻进行观测，并且总是注意到太阳就在数学地平线上。何时何地进行观察？你的答案必须包含解释和明确的数字（可能的坐标等）`},
{ year:'2003', category:'β', type:'TH', name:`6 Falling Anvil`, content1:`Even the ancient Greeks knew that the size of the Earth is small compared to the distances to the stars. For example, in one myth it is told that the god Hephaestus once carelessly dropped his anvil on the Earth. It took nine whole days before the anvil hit the earth. Estimate "the height of the sky" according to the representations of the ancient Greeks and compare it to the distances of objects known to you.`,content2:`即使是古希腊人也知道，与到恒星的距离相比，地球的大小很小。例如，在一个神话中，据说赫菲斯托斯神曾经不小心把铁砧掉在地上。铁砧花了整整九天才撞到地上。根据古希腊人的表述估算“天空的高度”，并将其与你所知道的物体的距离进行比较。`},
{ year:'2003', category:'αβ', type:'DA', name:`7 Light Measuring`, content1:`Note: You must carefully account for every step in your calculations. Answers without motivation will not be accepted. 
Imagine that the solar system in a distant future becomes inhabited by our descendants. On the asteroid Saltis, a small robotic mining establishment is supervised by Celesta Spacedigger, who also happens to be a dedicated amateur astronomer. Being bored by her job, Celesta spends the long nights of Saltis studying the stars and the planets, in particular the glorious planet Saturn. An old but reliable astronomical almanac helps her keeping track of celestial events like eclipses of the moon Titan by its planet Saturn. To her dismay, however, Celesta starts to note large deviations between her observed times of the eclipses of Titan and the tabulated ones. After years of careful observations (she has a long term assignment on Saltis) she begins to see a pattern; the deviations are largest when Saturn is close to opposition or conjunction (with the Sun, as seen from Saltis). She realises that this must be due to the finite speed of light, and a check in her almanac confirms that the tabulated timings are heliocentric, that is, as seen from the Sun, and not as seen from Saltis. Quite satisfied with her discovery, Celesta use her observations to calculate the speed of light. In this problem you are asked to repeat Celesta’s calculations by using her observations. The units of length and time that Celesta uses are a bit different from what you are used to. The unit of time is called pinit, and is defined such that there are 1000 pinit in one synodic rotation of Saltis. The length unit is called seter and is defined to be one billionth (10^-9) of the mean distance between the Sun and Saltis.
7.1. Celesta observed eclipses of Titan when Saturn was close to opposition or conjunction during six occasions (Table 1). Analyse her data carefully and estimate the speed of light, in units of seter/pinit, 
and give the expected error of your estimate. (50%) Celesta also enjoys listening to radio signals from Earth during her lonely days. With her rediscovery of the finite speed of light, Celesta gained enough confidence to try and measure the orbital radius of Earth (in seter). She synchronises her very accurate watch with a radio time signal from Earth, and then regularly follows how the time of her watch differs from the periodic time signal. Her measurements are presented in Fig. 1. 
7.2. Use Celesta’s data in Fig. 1 to estimate the radius of Earth’s orbit in seter. (20%) 
7.3. With 1 AU = 149.6·10^6km and c = 2.998·10^8m/s, how many meter is a seter? How many seconds is a pinit? (10%) 
7.4. Estimate the orbital period (in years) of Saltis from Fig. 1 and the answer to problem 3. (20%) `, content2:`注：在计算过程中，你必须仔细记录每一步。不接受没有推理过程的答案。
想象一下，在遥远的未来，太阳系被我们的后代所居住。在小行星萨尔蒂斯上，有一个小型的机器人采矿站，由塞莱斯塔·太空探矿者监管，她同时也是一名热心的业余天文学家。由于工作无聊，塞莱斯塔在萨尔蒂斯漫长的夜晚里研究星星和行星，尤其是辉煌的土星。一本古老但可靠的天文年鉴帮助她追踪天文事件，比如土星的卫星泰坦被土星遮掩的天文现象（即卫星蚀）。然而，令她沮丧的是，她开始注意到她观测到的泰坦蚀时间与年鉴上记录的时间存在很大偏差。经过多年的仔细观测（她在萨尔蒂斯有长期任务），她开始发现一种模式：当土星接近对冲或合相（从萨尔蒂斯看，土星与太阳在同一直线上，但分别在地球两侧或同侧）时，偏差最大。她意识到这一定是由于光速有限造成的，查阅年鉴后证实，年鉴上记录的时间是以日心视角（即从太阳上看）为准，而不是从萨尔蒂斯上看。对自己的发现相当满意，塞莱斯塔利用自己的观测结果来计算光速。在这个问题中，要求你利用塞莱斯塔的观测结果重复她的计算。塞莱斯塔使用的长度和时间单位与你习惯的不同。时间的单位是pinit，定义为萨尔蒂斯一个会合周期有1000个pinit。长度的单位是seter，定义为太阳与萨尔蒂斯平均距离的十亿分之一（10^-9）。
<img src="img/2003daf1.png">
<img src="img/2003daf2.png">
7.1. 塞莱斯塔在六次土星接近对冲或合相时观测到了土卫六的日食（表1）。仔细分析她的数据，以seter/pinit为单位估算光速，
并给出你估计的预期误差。（50%）塞莱斯塔在孤独的日子里也喜欢听来自地球的无线电信号。随着她对光速有限性的重新发现，塞莱斯塔获得了足够的信心来尝试测量地球的轨道半径（单位：秒）。她将非常精确的手表与来自地球的无线电时间信号同步，然后定期跟踪手表的时间与周期性时间信号的差异。她的测量结果如图1所示。
7.2. 使用图1中Celesta的数据来估算地球轨道的半径。(20%) 
7.3. 1 AU=149.6·10^6公里，c=2.998·10^8米/秒，一个seter是多少米？一个pinit有多少秒？(10%) 
7.4. 根据图1和问题3的答案估算Saltis的轨道周期（以年为单位）。(20%) `},
{ year:'2003', category:'β', type:'DA', name:`8 Mass of Saturn`, content1:`Introduction 
﻿
Ever since Galileo Galilei observed the ring of Saturn through a telescope for the first time, it has been regarded as one of the prime astronomical sights. The ring itself is not a rigid body, but consists of innumerable moonlets in Keplerian orbits around the planet, as shown spectroscopically almost simultaneously by Aristarkh A. Belopolsky and by James E. Keeler. The results of the latter were published in the very first issue of the Astrophysical Journal in 1895. In this problem, you are asked to repeat their argument using recent observations, and estimate the mass of Saturn. 
﻿
Observational details 
﻿
Saturn was observed by the Nordic Optical Telescope (NOT, a 2.5 m telescope on the Canary Island La Palma) 2002-02-25 at 23:25 Universal Time. A spectroscopic slit was placed over the planet as shown by Fig. 1. The retrieved spectrum (Fig. 2) shows the solar spectrum reflected on the planet. The straight vertical absorption lines are telluric, i.e. absorption lines arising when the light travels through the Earth's atmosphere, while the lines seen at inclination are the solar absorption lines reflected against the planet. The two strongest absorption lines seen in the spectrum are from the Na I (neutral sodium) D2 and D1 transitions, at restwavelengths 589.00 nm and 589.59 nm respectively. 
﻿
Problems 
﻿
Note: You must carefully account for every step in your calculation. Answers without motivation will not be 
accepted. 
8.1. The spectrum of Fig. 2 implies that the ring of Saturn cannot be a rigidly rotating body. Draw a figure that qualitatively shows what the spectrum would look like, if the ring was indeed rotating rigidly. (~20%) 
8.2. The sidereal rotation period of Saturn is known to be 10.66 hours. Estimate the equatorial diameter of Saturn from the spectrum of Fig. 2. (~30%) 
8.3. Estimate the mass of Saturn implied by the spectrum of Fig. 2. If you cannot remember the gravitational constant, you may use that 1 AU = 1.496×10^8km and the mass of the Sun is MSun = 1.99×10^30kg. (~50%) 
You may use the fact that the ring of Saturn is planar and parallel to the planet’s equator to calculate the inclination of the system relative to the line of sight.`,content2:`介绍

自从伽利略首次通过望远镜观测到土星环以来，它一直被视为主要的天文景点之一。该环本身不是一个刚体，而是由无数绕行星运行的开普勒轨道上的小卫星组成，Aristarkh a.Belopolsky和James E.Keeler几乎同时在光谱上显示了这一点。后者的研究结果发表在1895年的第一期«天体物理学杂志»上。在这个问题中，你被要求使用最近的观测重复他们的论点，并估计土星的质量。

观测细节

2002年2月25日23:25世界时，北欧光学望远镜（NOT，加那利岛拉帕尔马的2.5米望远镜）观测到土星。如图1所示，在行星上放置了一个光谱狭缝。检索到的光谱（图2）显示了地球上反射的太阳光谱。直的垂直吸收线是大地的，即当光穿过地球大气层时产生的吸收线，而倾斜看到的线是反射到地球上的太阳吸收线。光谱中观察到的两条最强吸收线分别来自Na I（中性钠）D2和D1跃迁，分别位于589.00 nm和589.59 nm的静止波长。

问题

注意：您必须仔细考虑计算中的每一步。没有动力的答案不会
认可的。
8.1. 图2的光谱表明土星环不能是一个刚性旋转体。画一个图，定性地显示如果环确实刚性旋转，光谱会是什么样子。(~20%) 
8.2. 土星的恒星自转周期为10.66小时。根据图2的光谱估算土星的赤道直径。(~30%) 
8.3. 估算图2光谱所暗示的土星质量。如果你不记得引力常数，你可以使用1AU=1.496×10^8km，太阳的质量为MSun=1.99×10^30kg。(~50%) 
你可以利用土星环是平面的并且平行于行星赤道的事实来计算系统相对于视线的倾斜度。
图一
<img src="img/2003daf3.png">
图二
<img src="img/2003daf4.png">
`},
{ year:'2003', category:'αβ', type:'OB', name:`[Data missing]`, content1:`Data missing`,content2:`数据缺失或不存在`},
{ year:'2006', category:'αβ', type:'location', name:`参赛地点信息`, content1:` Mumbai India<br>λ=72°53'39"E<br>φ=19°4'34"N<br> UTC +5:30`,content2:`印度 孟买<br>东经72°53'39"<br>北纬19°4'34"<br>增东五区`},
{ year:'2006', category:'αβ', type:'TH', name:`1 Telescope`, content1:`On the observational round you will use a simple Newton-system telescope with the mirror diameter D=125 mm, focal length F=1025 mm and 3 eye-pieces with focal lengths f’ = 12 mm,f,= 25 mm and f= 38 mm. Find on what distances (Δx1=,Δx2=, Δx3;= in vertical direction on the middle figure) it is necessary to move the corresponding eye-pieces (1,2,3) to readjust the telescope from observation of the sky obiects to observation of a monkey sitting at a distance L = 50 m from you. (Your answer should have both formula and numerical values.)What eyepiece is the most suitable for observation of the monkey? Why?`,content2:`在观测轮中，您将使用一个简单的牛顿系统望远镜，其镜面直径D=125毫米，焦距F=1025毫米，3个目镜，焦距F1=12毫米，F2=25毫米，F3=38毫米。找出在什么距离（Δx1=，Δx2=，Δx3；=在中间图的垂直方向上）需要移动相应的目镜（1,2,3）来重新调整望远镜，从观测天空物体到观测距离L=50米的猴子。（你的答案应该有公式和数值。）哪种目镜最适合观察猴子？为什么？<br><img src="img/2006thf2.png">`},
{ year:'2006', category:'β', type:'TH', name:`1+ Telescope`, content1:`L = 50 m as before, but now the monkey is running directly towards you (to steal something to eat) with a speed v= 3 m/s. Find the rate (in mm/s) of moving the most suitable eye-piece for readjusting the telescope to keep the monkey in focus.`,content2:`L=50米，和以前一样，但现在猴子正以v=3米/秒的速度直接朝你跑来（偷东西吃）。找到移动最合适的目镜以重新调整望远镜以保持猴子聚焦的速率（单位：毫米/秒）。<br><img src="img/2006thf3.png">`},
{ year:'2006', category:'αβ', type:'TH', name:`2 False Star`, content1:`The White Bear (whom was already met in the Vll, Vl, lX and X International Astronomy Olympiads) decided to connect a telescope to a film photo camera to make photos of constellations. Theexposure times used were of order of 5 minutes, His comrade Penguin appears to be a great joker andbought a photoflash lamp. He decided to play a trick on the Bear and to “"put" an extra star in his skyimage, while the Bear photographed near-horizon constellations. The Penguin sitting in the photographicarea of the Bear's telescope (of course, relatively far firom the telescope - 2.5 km) flashed once (sent onelight pulse) to the camera during the exposure. Estimate the stellar magnitude of the false star in the Bear's image.Take into account the parameters of the flash pulse. The photographic conditions (sensitivity of film,diaphragm) while photographing objects with the flash at the distance of 1.5 metres (from both flash andcamera) should be the same as while photographing the same objects on a sunny day with an exposuretime of about 1/1000 second.The solution has to include a picture with images ofthe telescope, Bear and Penguin.`,content2:`白熊（已经在Vll、Vl、lX和X国际天文学奥林匹克赛上见过面）决定将望远镜连接到胶片相机上，拍摄星座照片。使用的曝光时间约为5分钟，他的同伴企鹅似乎是个爱开玩笑的人，买了一个闪光灯。他决定捉弄熊，在他的天空图像中“添加”一颗额外的恒星，而熊则拍摄近地平线的星座。坐在熊望远镜摄影区（当然，离望远镜相对较远-2.5公里）的企鹅在曝光过程中向相机闪烁了一次（发送了一个光脉冲）。估计熊图像中假恒星的星等。考虑闪光脉冲的参数。用闪光灯在1.5米距离（从闪光灯和相机）拍摄物体时的摄影条件（胶片灵敏度、光圈）应该与在阳光明媚的日子用曝光时间约为1米拍摄相同物体时的条件相同。/1000秒。解决方案必须包括一张带有望远镜、熊和企鹅图像的图片。`},
{ year:'2006', category:'αβ', type:'TH', name:`3 Polar Day&Night`, content1:`Find the boundaries of the region of the polar day and the region of polar night atthe dates when the Sun may be in Zenith in Mumbai, HBCSE. The latitude and longitude of HBCSE areare λc =72° 56', φc = 19° 03'. Take as many effects as possible into account.`,content2:`在HBCSE孟买，太阳可能位于天顶的日期，找到极昼区域和极夜区域的边界。HBCSE的经纬度为λc=72°56'，φc=19°03'。尽可能多地考虑影响。`},
{ year:'2006', category:'αβ', type:'TH', name:`4 Galaxy`, content1:`Figure 4.1. shows the distribution of hydrogen gas in the disk of the spiral galaxy NGC 1325 as acontour map. The contour image is super imposed on an optical image of the galaxy. Assume the disk of the galaxy to be nearly circular, Find the angular diameter ofthe galaxy. (As the angular size of the galaxy is small to an observer on the Earth, you can use plane geometry as an approximation,) Estimate the diameter and distance to the galaxy in kpc. Find the angle of inclination of the galaxy plane with respect to the plane of the sky.`,content2:`图4.1中显示了螺旋星系NGC 1325圆盘中氢气的分布。轮廓图像叠加在星系的光学图像上。假设星系的圆盘近乎圆形，求出星系的角直径。（由于星系的角度大小对地球上的观察者来说很小，你可以使用平面几何作为近似值。）以kpc为单位估算星系的直径和距离。求出星系平面相对于天空平面的倾斜角度。<br><img src="img/2006thf4.png">`},
{ year:'2006', category:'β', type:'TH', name:`4+ Galaxy`, content1:`Figure 4.2 shows 2° in diameter region of sky near NGC 1325. A radio message on the wavelength λ = 20 cm has been sent to this region from the Earth in hope that after 260 years the sapiens habitants of system of star τ4 Eri receive it, But the signal passed further and has been  registered only by habitants of NGC 1325. Scientists of NGC 1325 also think that intelligence exists in τ4 Eri system. What size of radio telescope should be possessed by citizens of NGC 1325 to identify that the signal issued in Solar system but not in τ4 Eri system.`,content2:`图4.2显示了NGC 1325附近直径为2°的天空区域。一条波长为λ=20cm的无线电信息已从地球发送到该地区，希望260年后，恒星τ4 Eri系统的智人居民能收到它，但信号传递得更远，只有NGC 1325的居民记录了它。NGC 1325的科学家也认为τ4 Eri星系中存在智慧。NGC 1325的公民应该拥有多大尺寸的射电望远镜来识别太阳系发出的信号，而不是τ4 Eri系统发出的信号。<br><img src="img/2006thf5.png">`},
{ year:'2006', category:'α', type:'TH', name:`5 Lunar Satellite`, content1:`These are two photos of the Moon taken by the same camera mounted on a lunar satellite.The first photo has been made while the satellite was near its periselenion and the second one near the aposelenion. Find from these data the value of the satellite's orbit eccentricity. Estimate the minimum period between the moments at which these two photos could be taken.`,content2:`这是安装在月球卫星上的同一台相机拍摄的两张月球照片。第一张照片是在卫星靠近其近端时拍摄的，第二张是在远端附近拍摄的。从这些数据中找出卫星轨道偏心率的值。估计拍摄这两张照片之间的最短时间。<br><img src="img/2006thf6.png">`},
{ year:'2006', category:'β', type:'TH', name:`5 Lunar Satellite`, content1:`These are two photos of the Moon taken by the same camera mounted on a lunar satellite.The first photo has been made while the satellite was near its periselenion and the second one near the aposelenion. Estimate from these data the maximum possible period of orbit around the Moon of this satellite. Consider the lunar orbit around Earth as circular.`,content2:`这是安装在月球卫星上的同一台相机拍摄的两张月球照片。第一张照片是在卫星靠近其近端时拍摄的，第二张是在远端附近拍摄的。根据这些数据估计这颗卫星绕月轨道的最大可能周期。将月球绕地球的轨道视为圆形。<br><img src="img/2006thf6.png">`},
{ year:'2006', category:'α', type:'DA', name:`6 NGC1325`, content1:`In the theory problem 4 you answered the question about the spiral galaxy NGC 1325.You estimated that the inclination of the galaxy is 70° and its angular diameter is roughly 6.5'.corresponding to roughly 43 kpc in the physical diameter, This galaxy was observed at GMRT,India during the month of May 2001, to study its rotation profile using the 21 cm wavelength of hydrogen gas in the galaxy. The bottom figure shows distribution of rotational velocities of the gas as a contour map. The image is super imposed on an optical image of the galaxy (not taken by GMRT).
The centre of this galaxy is receding from us. As the galaxy is rotating about itself, one side of the galaxy would appear to recede at a slower speed from us as compared to the other side. In the bottom figure the white contour lines denote velocities slower than the mean velocity and dark contour lines show velocities faster than the mean velocity, Contour lines are drawn for every 10 km/s change in the velocity in the plane of the galaxy (i.e. do not worry about inclinationeffects).
6.1. Draw the rotation curve of the galaxy (i.e. rotational velocity vs. distance from centre in arcsec)
6.2. From the rotation curve drawn, estimate the total mass of the galaxy (in masses of Sun Ms)assuming the circular motion.`,content2:`在理论问题4中，您回答了关于螺旋星系NGC 1325的问题。您估计该星系的倾角为70°，角直径约为6.5’。对应于物理直径约为43 kpc。该星系于2001年5月在印度GMRT被观测到，以使用星系中21厘米波长的氢气研究其旋转轮廓。下图以等高线图的形式显示了气体的转速分布。该图像叠加在星系的光学图像上（不是由GMRT拍摄的）。
这个星系的中心正在远离我们。当星系围绕自身旋转时，星系的一侧似乎以比另一侧更慢的速度远离我们。在下图中，白色等高线表示速度低于平均速度，暗等高线表示速度高于平均速度。等高线是针对星系平面内速度每10公里/秒的变化绘制的（即不必担心倾斜效应）。
6.1. 绘制星系的旋转曲线（即旋转速度与中心距离的关系，单位为弧秒）
6.2. 根据绘制的旋转曲线，假设圆周运动，估计星系的总质量（以太阳Ms的质量为单位）。
<img src="img/2006daf1.png">`},
{ year:'2006', category:'α', type:'DA', name:`7 Antennae GMRT`, content1:`A table with coordinates of the GMRT antennae as relative positions from the central antenna A14 is given below, The latitude and longitude of A14 are φp= 19° 05' 36",λ=74° 03'01".
7.1 Prepare the map of the GMRT antennae system. You need to mark the central square on the map(the 1 km x 1 km area, which you saw during your GMRT visit), mark antenna at the origin andplot all the antennae outside the central square. Write down the antenna number near its locationon the graph paper.Parallel beams of radio-waves come from distant objects and falls on the GMRT antenna. The signals will reach different antennas at slightly different times depending on the inclination of the source with respect to the Antenna, Let us assume that the four antennas(A1 A10 A14 A30) listed below are observing Sun at noon 23rd September.
7.2.Calculate the delay in signal arrival between A1 and the Antenna farthest from A1, assuming a flat Earth.
7.3. Assuming now the Earth is not flat, calculate the additional term in time lag due to curvature of the Earth.`,content2:`下表给出了GMRT天线的坐标作为与中心天线A14的相对位置。A14的纬度和经度为φp=19°05'36“，λ=74°03'01”。
7.1绘制GMRT天线系统图。您需要在地图上标记中心广场（您在GMRT访问期间看到的1公里x 1公里的区域），在原点标记天线，并在中心广场外标记所有天线。在方格纸上写下靠近其位置的天线编号。平行的无线电波束来自远处的物体，落在GMRT天线上。根据源相对于天线的倾斜程度，信号将在略微不同的时间到达不同的天线。让我们假设下面列出的四个天线（A1 A10 A14 A30）在9月23日中午观测太阳。
7.2.假设地球平坦，计算A1和距离A1最远的天线之间的信号到达延迟。
7.3. 假设现在地球不是平的，计算由于地球曲率引起的时间延迟的附加项。
<img src="img/2006daf2.png">`},
{ year:'2006', category:'β', type:'DA', name:`6 Star Monitor`, content1:`There was a monitoring of a bright star in Mumbai over a whole night. It has been done with a 14" telescope in three wavelength bands (B, V and R bands). Assume that the observedwavelengths can be approximated by effective wavelengths of 450 nm, 550 nm and 700 nm for theobserved star. As the night progresses, the star is seen at different zenith angles and hence the starlight passes through different thickness of the Earth's atmosphere. Consequently, the extinction due to the Earth's atmosphere changes; it is minimum when the star is closest to the zenith and maximum when thestar is rising or setting. Sample data are given in the table. The air-mass in the second column gives effective air-mass of the atmosphere normalized with the air mass at zero zenith angle taken as one.Magnitudes are correct to 0.05m.
6.1. Plot the appropriate graph and find the apparent magnitude of the star in the three wavelengths, in the absence of Earth's atmosphere.
6.2. The Hipparcos satellite gave a parallax of 0.0076 arcseconds for this star. Mark the location of the star inthe H-R Diagram given separately.
6.3. The colour index can be calibrated in terms of the stellar temperature. An empirical fit (for the region ofH-R diagram to which this star belongs) is given by:B-V=-3.68 log(T)+ 14.55 (where T is the absolute temperature).Estimate the temperature ofthe star.
6.4. If the particular star was in the constellation Orion, which is the most likely candidate out of the four brightest stars in the constellation? Write the Latin name of the star (you have to write in roman script,spelling mistakes will be tolerated as long as the name of the star is understandable).6.5. In Mumbai, let us assume the extinction varies as λ- (where λ is the wavelength). From the given data,find parameter α.`,content2:`孟买一整晚都在监测一颗明亮的恒星。这是用一台14英寸望远镜在三个波段（B、V和R波段）完成的。假设观测到的波长可以用观测到的恒星的450nm、550nm和700nm的有效波长近似表示。随着夜晚的进行，恒星在不同的天顶角被看到，因此星光穿过地球大气层的不同厚度。因此，由于地球大气层的变化而导致的消光发生了变化；当恒星最接近天顶时最小，当恒星上升或下降时最大。表中给出了样本数据。第二列中的空气质量给出了大气的有效空气质量，用零天顶角的空气质量归一化为1。幅度是正确的至0.05m。
6.1. 绘制适当的图表，并在没有地球大气层的情况下，找到恒星在三个波长下的视星等。
6.2. Hipparcos卫星为这颗恒星提供了0.0076弧秒的视差。在单独给出的H-R图中标记星形的位置。
6.3. 颜色指数可以根据恒星温度进行校准。经验拟合（适用于这颗恒星所属的H-R图区域）如下：B-V=-3.68 log（T）+14.55（其中T是绝对温度）。估算恒星的温度。
6.4. 如果特定的恒星位于猎户座，那么在该星座最亮的四颗恒星中，哪一颗最有可能成为候选者？写下星星的拉丁名字（你必须用罗马字母写，只要星星的名字是可以理解的，拼写错误是可以容忍的）。在孟买，让我们假设消光随λ-（其中λ是波长）变化。根据给定的数据，找到参数α。
<img src="img/2006daf3.png">`},
{ year:'2006', category:'β', type:'DA', name:`7 A Binary Pulsar`, content1:`A radio pulsar is a rapidly spinning neutron star emitting beams of radio waves from its magnetic poles. These are observed on Earth as a series of pulses separated by the apparent pulse period P. When the pulsar is a member of a binary system, this differs from the true pulse period (Po) of the pulsar. The pulsar 0514-40 was studied with the GMRT, India in the year 2004. The true pulse period of this pulsar is P0= 4.990575 ms.Table gives data of P, as a function of time in units of orbital period, t/T (T= 18.35 days). Assume the observer is located in the orbital plane of the pulsar.
7.1. Make a graph of this data set (scale the graph properly).
7.2. If the orbit had been circular, shape of the data curve would not be the same as the graph you have just drawn. Sketch the shape of the data curve for a circular orbit.A graph of the elliptical orbit of the pulsar with eccentricity 0.866 is provided to you (for the pulsar 0514-40, the eccentricity of orbit is very close to this value). The arrow on the curve indicates that the pulsar is moving counterclockwise in its orbit around the focus O, AP and BD are perpendicular to each other; AP is the major axis of the ellipse.
7.3. Taking uA at A as unit speed, calculate the transverse speeds at positions B, P and D (transverse speed ua of the pulsar at any point G is the magnitude of the component perpendicular to OG).
7.4. On the graph of orbit provided to you, a tangent to the curve at point B is shown on the graph. Using thegraph of the orbit or otherwise, determine the total speed at B, P and D (ve, vp and vo respectively) in the same unit of speed.
7.5. From the shape of the Pt versus t/T data, infer whether the observer is located close to the major axis, or minor axis of the orbit and on which side.
7.6. Assume that the velocity component parallel to the major axis is maximum at the points B and D. Markthe points A, B, P and D on the graph of the data drawn by you.
7.7. Sketch roughly, on the same graph paper, the Pt vs. t/T curve if the observer was on the axis perpendicularto that in 7.5.
7.8. From the orbital graph, estimate the fraction of the total orbital period taken to travel the arc DPB?Estimate the same from the graph ofthe data you have drawn.
7.9. Draw a line P1 = P0 on your graph of the data. Measure the areas under the curve you have drawn on the upper and lower sides of this line and use it to give an estimate of the major axis in light seconds.`,content2:`射电脉冲星是一颗快速旋转的中子星，从其磁极发射无线电波束。这些在地球上被观测为一系列由视脉冲周期P分隔的脉冲。当脉冲星是双星系统的成员时，这与脉冲星的真实脉冲周期（Po）不同。脉冲星0514-40于2004年由印度GMRT研究。该脉冲星的真实脉冲周期为P0=4.990575ms。表中给出了P的数据，作为轨道周期t/t（t=18.35天）单位的时间函数。假设观察者位于脉冲星的轨道平面内。
7.1. 制作此数据集的图表（正确缩放图表）。
7.2. 如果轨道是圆形的，数据曲线的形状将与您刚才绘制的图形不同。绘制圆形轨道的数据曲线形状。为您提供偏心率为0.866的脉冲星椭圆轨道图（对于脉冲星0514-40，轨道偏心率非常接近此值）。曲线上的箭头表示脉冲星在围绕焦点O的轨道上逆时针移动，AP和BD相互垂直；AP是椭圆的长轴。
7.3. 以A处的uA为单位速度，计算位置B、P和D的横向速度（脉冲星在任何点G的横向速度uA是垂直于OG的分量的大小）。
7.4. 在提供给您的轨道图上，曲线在点B处的切线显示在图上。使用轨道图或其他方法，以相同的速度单位确定B、P和D处的总速度（分别为ve、vp和vo）。
7.5. 根据Pt与t/T数据的形状，推断观察者是位于轨道的长轴还是短轴附近，以及在哪一侧。
7.6. 假设平行于长轴的速度分量在点B和D处最大。在您绘制的数据图上标记点A、B、P和D。
7.7. 如果观察者位于与7.5中垂直的轴上，则在同一图表纸上大致绘制Pt与t/T曲线。
7.8. 根据轨道图，估算出沿弧形DPB运行所需的总轨道周期的分数？根据你绘制的数据图进行估算。
7.9. 在数据图上画一条线P1=P0。测量您在这条线的上侧和下侧绘制的曲线下的面积，并用它来估计长轴（以光秒为单位）。
<img src="img/2006daf4.png">`},
{ year:'2006', category:'αβ', type:'OB', name:`[Data missing]`, content1:`Data missing`,content2:`数据缺失或不存在`},
{ year:'2007', category:'αβ', type:'location', name:`参赛地点信息`, content1:` Simeiz Crimea<br> UTC +3`,content2:`克里米亚 西梅依兹<br>东三区`},
{ year:'2007', category:'α', type:'TH', name:`1 Earth and Moon`, content1:`The photo of the Earth and the Moon is taken from an artificial satellite of the Earth. Estimate the stellar magnitude of the Moon for an observer on this satellite.`,content2:`地球和月球的照片是从地球的人造卫星上拍摄的。为这颗卫星上的观察者估计月球的星等。
<img src="img/2007thf1.png">
清朝の奇妙画质↑`},
{ year:'2007', category:'α', type:'TH', name:`2 Sidereal Period`, content1:`Estimate (at least roughly) the smallest and the largest possible orbital sidereal periods of bodies (any bodies, including artificial ones) of our Solar System.`,content2:`估计（至少粗略地）我们太阳系中物体（包括人造物体）的最小和最大恒星轨道周期。`},
{ year:'2007', category:'α', type:'TH', name:`3 Marsset`, content1:`Estimate (at least roughly) the duration of Mars disk set for an observer at the mountain Koshka in Simeiz for Mars in Great opposition.`,content2:`为Simeiz Koshka山的观测者估算（至少粗略地）火星大冲时火星落的持续时间。`},
{ year:'2007', category:'β', type:'TH', name:`1 Galaxy`, content1:`The bolometric (total) stellar magnitude of a galaxy visible from a distance of L1 = 3 Mpc is m1 = 6m.88. Find the bolometric stellar magnitude m2 of this galaxy visible from a distance of L2 = 3 Gpc`,content2:`从L1=3 Mpc的距离可见的星系的测辐射热（总）恒星星等为m1=6m.88。算这个星系在L2=3 Gpc距离可见的辐射热恒星星等m2`},
{ year:'2007', category:'β', type:'TH', name:`2 Space Sail`, content1:`A space probe for research of the asteroid belt is sent to objects of researches by using a solarsail. The probe-system of mass m = 1 ton was moving around the Sun in a circular orbit of radius 1 a.u.Then such a sail (that was earlier a part of the probe-system) was opened and after half a revolution around the Sun the probe has reached Ceres. Estimate the area S and thickness d of this sail. Consider the sail is of mirror-type. The typical distances of the asteroid belt bodies from the Sun are 2.8 a.u. The constant of total solar irradiation is A=1.37 kW/m²`,content2:`使用太阳帆将用于研究小行星带的空间探测器发送到研究对象。质量为m=1 ton的探测器系统在半径为1a.u的圆形轨道上绕太阳运行。然后，这样一个帆（早期是探测器系统的一部分）被打开，在绕转太阳半圈后，探测器已经到达了谷神星。估算该帆的面积S和厚度d。考虑到帆是镜面型的。小行星带天体与太阳的一般距离为2.8 a.u。太阳常数为A=1.37 kW/m²`},
{ year:'2007', category:'β', type:'TH', name:`3 Alcohol in Universe`, content1:`Astronomers based at Britain's jodrell Bank Observatory say they have spotted a cloud of alcohol in deep space that measures 288 billion miles (463 bilion kilometres) across, a finding that could shed light on how giant stars are formed from primordial gas. Some nations even decided to send expeditions to this area to taste the cloud but enthusiasm disappeared after leaming that the cloud is so remote that it will take us many milions years to reach it on the modern techniques. The densily of molecules in the cloud is large in comparison with the interstellar gas density but very small from ourcustom point of view, only about 10 atoms/m³, Estimate the temperature such a cloud should have to bestable and not get dispersed in future (before the international expedition will reach the cloud). Suppose the alcohol is ethyl(C₂H₅OH).`,content2:`英国乔德雷尔银行天文台的天文学家表示，他们在深空发现了一团直径2880亿英里（4630亿公里）的酒精云，这一发现可能会揭示巨星是如何由原始气体形成的。一些国家甚至决定派遣探险队前往该地区品尝云层，但在意识到云层如此遥远，在现有科技基础下我们需要数百万年才能到达之后，热情消失了。与星际气体密度相比，云中分子的密度很大，但从我们的习惯角度来看，它非常小，只有大约10个原子/m³。估计这样的云在未来（在国际探险队到达云之前）应该达到什么温度，不会分散。假设酒精是乙醇（C₂H₅OH）。`},
{ year:'2007', category:'αβ', type:'TH', name:`4 Photo`, content1:`in the photo given to you there is an airplane with the Moon in the background. Let us suppose thatthe photo was taken in Simeiz at the day of a solar eclipse (or at one of the days closest to a solar eclipse) Estimate how long later is (or how long time ago was) the solar eclipse. (Note: The answer «Будетш-Will be» or «Было-Was» has to be written in English or Russian.) Will it be (or was it) possible to observe this eclipse in Simeiz? (Note:the answer «Дa-Yes», «Может быть-May be» or «Нет-No») hasto be written in English or Russian and a picture explaining your answer has to be included.)`,content2:`在给你的照片中，有一架以月球为背景的飞机。让我们假设这张照片是在日食当天（或最接近日食的一天）在Simeiz拍摄的。估计日食发生多久（或发生多久）。（注：答案“Будет-will be”或“Было-was”必须用英语或俄语书写。）是否有可能（或曾经）在Simeiz观测到这次日食？（注：答案“Дa-Yes”、“Может быть-May be”或“Нет-No”）必须用英语或俄语书写，并附上解释您答案的图片。）`},
{ year:'2007', category:'αβ', type:'TH', name:`5 Visit`, content1:`Extraterrestrial animals (animaloids) decided to colonize the Earth. The navigation devices of the spacecrafts of vituloids (lat. vitulus = seal = Тюлень) needs that sometimes after the landing the Polar star (a = 2h32m, 6 = 89°16' at the epoch of starting the colonization) must be exactly in Zenith and the devices of crocodiloids needs that sometimes the Polar Star must be exactly on the Horizon. The devices are placed on the top of the spacecrafts and these can land on the Earth only in vertical positions. Also every device has to be invisible directly for the device of any other spacecraft. Estimate, how many spacecrafts of every type of animaloids can land on the Earth. Consider the Earth to be spherical, the spacecrafts' bottoms to be on its surface (may stay either on ground or on the water) and the height of every spacecraft is h= 10 m.`,content2:`外星动物决定在地球上定居。vituloid族航天器的导航设备需要，有时在着陆后，极星（在开始殖民时期，a=2h32m，6=89°16'）必须正好位于天顶，crocodiloid族航天器的设备需要，有时候极地恒星必须正好位于地平线上。这些装置被放置在航天器的顶部，这些装置只能垂直降落在地球上。此外，对于任何其他航天器的设备来说，每个设备都必须是不可见的。估计一下，每种动物能有多少艘航天器降落在地球上。假设地球是球形的，航天器的底部位于其表面（可能留在地面或水面上），每艘航天器的高度为h=10米。`},
{ year:'2007', category:'α', type:'DA', name:`6 The O-C Diagram`, content1:`Variable stars of the Mira Cetus type show significant variations in their pulsational period from cycle to cycle. Sometimes their periods increases or decreases during a long time period, sometimes it suddenly changes from one value to another, or show irregular variation. In addition to this, the shape of the light curve can change, and this leads to irregular errors in the determination of the moments of maximum of the light. To find a possible period variation, so called «O-C» diagrams are used. They give the dependence of the difference between observed (O) and calculated (C) moments of maximum light upon JD or cycle number. The moment of maximum is calculated using the linear formula T=T₀+PE, where T₀ is some initial moment of maximum, P is the supposed period, E is the number of cycles that passed after the moment T₀. The two columns of the table list the observational data, the number of current of observation, and corresponding moment of maximum O for a certain star of the considered type.For this star the value of the calculated period determined before the listed observations was 302.0 days.
6.1. Fill in the empty spaces of the table (at the separate sheet).
6.2. Make a plot “O-C” versus E.
6.3. Using the “O-C” diagram find the regions where the period is relatively stable(i.e. it changes not very significantly from cycle to cycle), and find the mean value P for each of these time intervals. In your copybook make a new table (see an example at right side) in which each line should contain the corresponding intervals of the relatively stable periods and its approximate value.`,content2:`蒭藁型变星的脉动周期在不同的周期中表现出显著的变化。有时，它们的周期在很长一段时间内会增加或减少，有时会突然从一个值变化到另一个值，或者显示出不规则的变化。除此之外，光曲线的形状可能会发生变化，这会导致在确定光的最大矩时出现不规则误差。为了找到可能的周期变化，使用了所谓的“O-C”图。它们给出了观测到的（O）和计算出的（C）最大光矩之间的差异与JD或循环数的关系。使用线性公式T=T₀+PE计算最大时刻，其中T₀是某个初始最大时刻，P是假设的周期，E是时刻T₀之后经过的循环数。表中的两列列出了所考虑类型的某颗恒星的观测数据、观测电流数量和相应的最大O时刻。对于这颗恒星，在列出的观测结果之前确定的计算周期值为302.0天。
6.1. 填写表格中的空白处（在单独的表格中）。
6.2. 绘制一幅“O-C”与E的对比图。
6.3. 使用“O-C”图找到周期相对稳定的区域（即周期之间变化不大），并找到每个时间间隔的平均值P。在你的文案中，制作一个新的表格（见右侧的示例），其中每一行都应该包含相对稳定时段的相应间隔及其近似值。
<img src="img/2007daf1.png">`},
{ year:'2007', category:'α', type:'DA', name:`7 Radial Velocity`, content1:`A cepheid has its mean apparent magnitude of 6m.2.Spectroscopic observations for this cepheid were carried out during 16 successive nights. The list of observations is given in the table, where the radial velocity is given in heliocentric system. Make such a plot based on the data listed in this table which enables you to derive several important characteristics of this cepheid and to answer the question: Could this cepheid be seen by the first people on the Earth (about 2 million years ago)?(The answer should be written in English: Yes or No.) What was the apparent magnitude of this star at that time? 
Supplementary information:Use the relation showed in the plot below(this relation is valid for cepheids- pulsating stars).
Recommendations: Interstellar absorption and possible changes of the cepheid mean luminosity during the last 2 million years can be ignored.`,content2:`造父变星的平均绝对星等为6m.2。连续16个晚上对该造父变变星进行了光谱学观测。表中给出了观测值列表，其中径向速度以日心说系统给出。根据此表中列出的数据绘制这样的图，使您能够得出这种造父变星的几个重要特征，并回答以下问题：地球上的第一批人（大约200万年前）能看到这种造父变吗？（答案应该用英语写：是或否。）这颗恒星当时的视星等是多少？
补充信息：使用下图所示的关系（这种关系适用于造父变星——脉动恒星）。
建议：过去200万年间，星际吸收和造父变星平均光度的可能变化可以忽略不计。
<img src="img/2007daf2.png">
图一
<img src="img/2007daf3.png">
图二`},
{ year:'2007', category:'β', type:'DA', name:`6 Supernova`, content1:`A Hubble diagram is shown in the right plot. Find the apparent magnitude of a hypothetic Supernova of type la, if it exploded at a distance 2.5.10³  Mpc, and it is known that all of the SN Ia have similar absolute magnitudes (M= -19m.5).`,content2:`哈勃图如右图所示。如果假设的la型超新星在2.5.10³ Mpc的距离爆炸，并且已知所有Ia超新星的绝对星等都相似（M=-19m.5），找到它的视星等。<br> <img src="img/2007daf4.png">`},
{ year:'2007', category:'β', type:'DA', name:`7 Radial Velocity`, content1:`Imagine a cepheid whose position is on the border between the constellations of Sgr and Sct. This cepheid has a mean apparent magnitude of 6m.2. Spectroscopic obseryations of the Hα line (laboratory wavelength is λ=6562.8 Å) for this cepheid were carried out during 16 successive nights in the second part of September. The list of observations is given in the table. Make such a plot based on the data listed in this table which enables you to derive several important characteristics of this cepheid and to answer the question: Could this cepheid be seen by the first people on the Earth (about 2 million years ago)? (the answer should be written in English: Yes or No.) What was the apparent magnitude of this star at that time?
Supplementary information: Use the relation showed in the plot below (this relation is valid for cepheids pulsating stars).
Recommendations: interstellar absorption, rotation of the Earth around its axis and possible changes ofthe cepheid mean luminosity during the last 2 million years can be ignored.`,content2:`想象一下，一个造父变星的位置在人马座和盾牌座之间的边界上。这个造父变星的平均视星等为6m.2。9月下旬，连续16个晚上对该造父变星的Hα线（实验室波长为λ=6562.8 Å）进行了光谱观测。观察结果列表见表。根据此表中列出的数据绘制这样一个图，使您能够得出这个造父变星的几个重要特征，并回答这个问题：地球上的第一批人（大约200万年前）能看到这个造父变吗？（答案应该用英语写：是或否。）这颗恒星当时的视星等是多少？
补充信息：使用下图所示的关系（此关系适用于造父变星脉动恒星）。
建议：星际吸收、地球绕地轴旋转以及造父变星平均光度在过去200万年中的可能变化可以忽略不计。
<img src="img/2007daf5.png">
图一
<img src="img/2007daf6.png">
图二
<img src="img/2007daf7.png">
图三`},
{ year:'2007', category:'αβ', type:'OB', name:`8 Stars`, content1:`8.1. Show to the examiner the Delphinium constellation in the sky.
8.2. Estimate the stellar magnitude of the brightest star that is visible now in the sky field not more 24° from the ε Delphinium. Write the value on the answer sheet.
俄：8.1. Покажите экзаменатору созвездие Дельфин на небе.
8.2. Оцените звёздную величину ярчайшей звезды, видимой в данный момент не далее 24° от ε Дельфина. Запишите ответ на листок ответов.`,content2:`8.1. 向考官展示天空中的海豚星座。
8.2. 估计现在天空中可见的最亮恒星的星等，与ε Del相距不超过24°。把数值写在答题纸上。`},
{ year:'2007', category:'αβ', type:'OB', name:`9 Area`, content1:`Estimate in square degrees the square of the triangle formed by the stars α Cygnus, γ Cygnus, α Cephei. Write the value on the answer sheet.
俄：Оцените в квадратных градусах площадь треугольника, образованного звёздами α Лебеля, γ Лебеля, α Цефея. Запишите ответ на листок ответов.`,content2:`9.以平方度估算由恒星α天鹅座、γ天鹅座和α仙王座形成的三角形的面积。把数值写在答题纸上。`},
{ year:'2007', category:'αβ', type:'OB', name:`10 Star Paint`, content1:`One bright star is missing at the sky map given by the organizer. Draw this star on the map.
俄：На предложенной карте звёздного неба не хватает одной яркой звезды. Нанесите её на карту.`,content2:`组织者提供的星图上缺一颗亮星。在星图上画出来。
<img src="img/2007obf1.png">`},
{ year:'2009', category:'αβ', type:'location', name:`参赛地点信息`, content1:` Hangzhou China<br>λ=120°12'E<br>φ=30°18'<br> UTC +8`,content2:`中国 杭州<br>东经120°12'<br>北纬30°18'<br>东八区`},
{ year:'2009', category:'αβ', type:'TH', name:`1 Sirius`, content1:`Sirius. It is known that the so called “Dog Star” (Sirius) is the brightest star in the Chinese sky. And in what else districts on the Earth Sirius is also the brightest star in the real sky of this district? What are numerical characteristics of the borders of these districts? Note: you should take into account only stars in their historical-classical meaning, i.e. Sun, planets, etc. should not be taken into account.`,content2:`众所周知，所谓的“狗星”（天狼星）是中国天空中最亮的恒星。在地球上还有哪些地区，天狼星也是这个地区真实天空中最亮的恒星？这些地区边界的数字特征是什么？注意：你应该只考虑恒星的历史经典意义，即太阳、行星等不应该被考虑在内。`},
{ year:'2009', category:'αβ', type:'TH', name:`2 Molecules' Amount`, content1:`Estimate the number of molecules in the Earth's atmosphere.`,content2:`估算地球大气层中的分子数量。`},
{ year:'2009', category:'α', type:'TH', name:`3 Eye Efficiency`, content1:`Estimate the theoretical limit of the maximum magnitude of stars that the human eye can see under very optimal conditions. Take into account that the eye’s retina “remembers” the image about 1/7 of a second. A 0m star sends us about 10¹⁰ photons/m² every second.`,content2:`估计人眼在最佳条件下可以看到的恒星最大星等的理论极限。考虑到眼睛的视网膜“记住”图像大约1/7秒。一颗0等恒星每秒向我们发送大约10¹⁰光子/m²。`},
{ year:'2009', category:'β', type:'TH', name:`3 Eris`, content1:`The largest discovered now in our Solar system Trans neptune body is the dwarf planet Eris. Now Eris is near its aphelion point. Find the apparent stellar magnitude of Eris as visible from Earth. Approximately when will the next “Great opposition” of Eris be? What will the magnitude of Eris be as visible from Earth at this “Great opposition”?`,content2:`目前在我们的太阳系中发现的最大的海王星外天体是矮行星厄里斯。现在厄里斯靠近它的远日点。找到从地球上可见的厄里斯的视星等。厄里斯的下一次“大冲”大约是什么时候？在这次“大冲”中，从地球上可以看到厄里斯的视星等是多少？`},
{ year:'2009', category:'αβ', type:'TH', name:`4 Catastrophe`, content1:`Imagine, that on July 5, 2084 the mass of the Sun suddenly has decreased to half its original value. Calculate a new period of revolution of the Earth around of the new Sun.`,content2:`想象一下，2084年7月5日，太阳的质量突然减少到原来的一半。计算地球围绕新太阳旋转的新周期。`},
{ year:'2009', category:'α', type:'TH', name:`5 Mirror Telescopium`, content1:`You have a disc of glass with thickness b = 40 mm,from which one has to make (by grinding) a spherical mirror with a diameter of D= 500 mm. What could the focal distances F be of a mirror made from this disc?`,content2:`你有一个厚度为b=40毫米的玻璃盘，必须用它（通过研磨）制成直径为D=500毫米的球面镜。用这个玻璃盘制成的镜子的焦距F是多少？`},
{ year:'2009', category:'β', type:'TH', name:`5 Galaxy Pair`, content1:`This famous galaxy pair contains two interacting galaxies, IC563 and IC564. The coordinates of the centers of IC563 and IC564 are respectively RA 146.58479, DEC 3.04558 and RA 146.58783, DEC 3.07137. Using the 2.16m telescope of The National Astronomical Observatories of China (NAOC), their R-band image in 2009 has been obtained, which is presented at the fig.1. The spectrum of the center of IC563 is shown at the fig.2.
5.1  We were assigned two periods of time in 2009 to carry out our observation. One was in April and another was in September. Please find out, when IC563, IC564 has been observed? (Write "Apr" or "Sep" in English.)
5.2. Mark IC563 and lC564 at the fig.1.
5.3. Find out the redshift of the galaxies. Consider the redshift of one of them can be realized as the redshift for the other.
5.4. NAOC astronomers want to take Hα photo of IC563 and IC564 next year to seek the star formation regions in or around them. There is a series narrow band Hα transmission filters in NAOC, as listed in table (the center wavelength is given in the terms of velocity). Select the most suitable filter for the observation.
5.5. How many parsecs away are the galaxies? What is the projected distance between the two galaxies?`,content2:`这个著名的星系对包含两个相互作用的星系，IC563和IC564。IC563和IC564的中心坐标分别为RA 146.58479、DEC 3.04558和RA 146.58783、DEC 3.07137。利用中国国家天文台2.16米望远镜，获得了2009年的R波段图像，如图1所示。IC563中心的光谱如图2所示。
5.1  2009年，我们被分配了两个时期进行观察。一个在四月，另一个在九月。请找出IC563、IC564何时被观察到？（用英语写“Apr”或“Sep”。）
5.2. 在图1中标记IC563和lC564。
5.3. 找出星系的红移。考虑到其中一个的红移可以实现为另一个的红移。
5.4. NAOC天文学家希望明年拍摄IC563和IC564的Hα照片，以寻找它们内部或周围的恒星形成区域。NAOC中有一系列窄带Hα透射滤光片，如表所示（中心波长以速度表示）。为观察选择最合适的过滤器。
5.5. 这些星系相距多少秒差距？两个星系之间的投影距离是多少？
<img src="img/2009thf1.png">
图一
<img src="img/2009thf2.png">
图二
<img src="img/2009thf3.png">
图三`},
{ year:'2009', category:'α', type:'DA', name:`6 Motion of a Planet`, content1:`Most of the time, planets move from west to east relative to the background stars Occasionally, however, they change direction and temporarily under go retrograde motion. After a few weeks, the direction is changed again. The apparent motion of a planet was observed in Hangzhou this year. Table 1 lists the values of the 24 hour angular displacement of the planet relative to the background stars (simplified as ADRS) on the day that the observation was made. Modified Julian Day (MJD = JD -2400000.5) are used for the dates. Minus means the direction is from east to west. 
6.1 Find the date (MJD) when the planet is at stationary point (simplified as STP) and at opposition (simplified as OPP) graphically, respectively. Accurate to one day. Write your answer in table 2.
6.2.What's the value of 24 hour angular displacement of the planet per day when it is at opposition? Write your answer in table 2.
6.3.On the basis of the result of question 2, estimate the radius of the planet's orbit in astronomical units. Suppose the orbits of Earth and the planet are both circular and the planet is in ecliptic plane.`,content2:`大多数时候，行星相对于背景恒星从西向东移动。然而，它们偶尔会改变方向，暂时处于逆行状态。几周后，方向再次改变。今年在杭州观测到一颗行星的明显运动。表1列出了观测当天行星相对于背景恒星的24小时角位移值（简化为ADRS）。日期使用修改后的儒略历日（MJD=JD-240000.5）。负意味着方向是从东到西。
6.1. 分别以图形方式找到行星处于留（简化为STP）和冲（简化为OPP）的日期（MJD）。精确到一天。把你的答案写在表2中。
6.2. 当行星处于对分相时，每天24小时的角位移值是多少？把你的答案写在表2中。
6.3. 根据问题2的结果，以天文单位估算行星轨道的半径。假设地球和行星的轨道都是圆形的，行星在黄道面上。
<img src="img/2009daf6.png">`},
{ year:'2009', category:'β', type:'DA', name:`6 Light Echo`, content1:`Light echoes are produced when the initial flash from a rapidly brightening object (such as a nova) is reflected by the surrounding interstellar dusts which may or may not be associated with the object. Light from the initial flash arrives at the viewer first, while light reflected by the dusts begins to arrive shortly afterward. The variable star V838 Monocerotis was seen to have a violent outburst in March 09.2002(Modified Julian Day 52342).Then the Hubble Space Telescope (HST) captured its light echoes from the surrounding dusts in the next few months. Figure 1 presents two photos observed by HST. The black box shows a field of view of 97"x97”.
Recently, astronomers found Monoceros V838 and other three adjacent main sequence stars are all members of an open cluster. Table l gives some observed data of the three stars, where V and B is apparent magnitude in V and B band, V0 and B0 is apparent magnitudes with extinction correction. Mᵥ is absolute V magnitude. It is known that for the cluster the interstellar extinction is 2.6m in V-band and 3.44m in B-band.
6.1. According to the Hertzsprung-Russell diagram (Figure 2) and the known data in Table 1, fill in the blankof Table 1.
6.2. An astronomer at the Shanghai Observatory proposed a theoretical model for V838 Mon. He found the velocity of the expanding envelope of V838 Mon varies with time, as listed in table 2. Plot the data in figure 3 and estimate the angular diameters of the envelopes when the photos in figure 1 were taken. Write your answers in Table 3.
6.3. According to the two photos of figure 1, estimate the radii of the dust shells which produced the outermost light echoes. Write your answers in Table 3.`,content2:`当快速变亮的物体（如新星）的初始闪光被周围的星际尘埃反射时，会产生光回波，这些尘埃可能与物体有关，也可能无关。最初闪光的光首先到达观察者，而被灰尘反射的光不久后开始到达。变星麒麟座V838在2002年3月9日（52342约化儒略日）发生了剧烈爆发。然后，哈勃太空望远镜（HST）在接下来的几个月里捕捉到了周围灰尘的光回波。图1显示了HST观察到的两张照片。黑框显示97"x97"的视野。
<img src="img/2009daf1.png">
最近，天文学家发现麒麟座V838和其他三颗相邻的主序星都是疏散星团的成员。表1给出了这三颗恒星的一些观测数据，其中V和B是V和B波段的视星等，V0和B0是经过消光校正的视星级。Mᵥ是绝对V量级。众所周知，该星团的星际消光在V波段为2.6m，在B波段为3.44m。
<img src="img/2009daf2.png">
6.1. 根据赫罗图（图2）和表1中的已知数据，填写表1的空白处。
6.2. 上海天文台的一位天文学家提出了V838 Mon的理论模型。他发现V838 Mon的膨胀包络速度随时间变化，如表2所示。绘制图3中的数据，并估算拍摄图1中的照片时包络的角直径。把你的答案写在表3中。
6.3. 根据图1的两张照片，估计产生最外层光回波的尘壳的半径。把你的答案写在表3中。
<img src="img/2009daf3.png">`},
{ year:'2009', category:'αβ', type:'DA', name:`7 Saturn Equinox`, content1:`One day this year, Saturn ushers in its own vernal equinox day. Through observations and calculations, a research group of Beijing Planetarium obtained the inclination angle of Saturn's ring which is varying with time. The result is plotted in figure 1. The horizontal axis is Julian Day and the vertical axis is the observed inclination angle in degrees. The curved line is the result observed from Beijing Planetarium and the (almost) straight line is the result observed by an imaginary observer on the Sun. The differences between them result firom the revolution of the Earth and the inclination of the orbital plane of Saturn which inclines to the ecliptic plane with an angle of 2°29'.On January 13, 2005 (Julian day 2453383), Saturn is at opposition. Saturn's orbital period is known as 29.46 years, and its equator inclines to its orbital plane with an angle of 26°43'. Suppose the Earth and Saturn's orbits are circular and the radius of Saturn's orbit is 9.54 AU.
7.1. According to Figure 1, find out which day is Saturn's Vernal Equinox Day. Give the integer value of Julian day. And mark it in Figure 1 as “Spr”.
7.2. According to Figure 1, estimate the largest inclination angle of Saturn's ring that can be observed from Beijing Planetarium and the Sun.
7.3. Mark the approximate position of the Earth and Saturn on Saturn's Vernal Equinox Day in Figure 2. Please indicate on the figure the angular relationship of the Earth, Saturn, and Sun. The inner circle is Earth's orbit and the outer is Saturn's (not to scale). Jan means the 1st of January, Feb means the 1st of February, and so on.
7.4. On Saturn's Vernal equinox day, what's the distance between Earth and Saturn (in AU)? lgnore the inclination of Saturn's orbit.
7.5. (group β only) lgnoring the inclination of Saturn's orbit, calculate, the maximum difference of the inclination angle of Saturn's ring between Beiing Planetarium and the Sun-observer (at the same moment).`,content2:`今年的一天，土星迎来了自己的春分日。通过观测和计算，北京天文馆的一个研究小组获得了土星环随时间变化的倾角。结果如图1所示。横轴是Julian Day，纵轴是以度为单位的观测倾角。曲线是北京天文馆观测到的结果，（几乎）直线是假想观测者在太阳上观察到的结果。它们之间的差异源于地球的自转和土星轨道平面的倾斜，土星轨道平面以2°29'的角度倾斜于黄道平面。2005年1月13日（儒略历2453383年），土星处于对分相。土星的轨道周期为29.46年，其赤道以26°43'的角度倾斜到轨道平面。假设地球和土星的轨道是圆形的，土星轨道的半径为9.54天文单位。
<img src="img/2009daf4.png">
7.1. 根据图1，找出哪一天是土星的春分日。给出Julian day的整数值。并在图1中将其标记为“Spr”。
7.2. 根据图1，估计从北京天文馆和太阳可以观测到的土星环的最大倾角。
7.3. 在图2中标记土星春分日地球和土星的大致位置。请在图上注明地球、土星和太阳的角度关系。内圈是地球的轨道，外圈是土星的轨道（不是按比例）。Jan是指一月一日，Feb是指二月一日，以此类推。
7.4. 在土星春分那天，地球和土星之间的距离是多少（以天文单位计）？忽略土星轨道的倾角。
7.5. （仅β组）根据土星轨道的倾角，计算贝宁天文馆和太阳观测者（同时）土星环倾角的最大差值。
<img src="img/2009daf5.png">`},
{ year:'2009', category:'αβ', type:'OB', name:`8 Skychart`, content1:`8.1. There are two bright stars that are missing in sky chart 1. Add them on to the chart with crosses(×).
8.2. Mark the approximate position of Jupiter tonight with a small circle (⚪) on sky chart 1.And write down English name of the planet (“Jupiter”) beside it.
8.3. Which of the following planets can also be observed tonight in the field of view of skychart1? Fill box □ by A, B, C or D.
A.Mars B.Saturn C.Neptune D.Uranus`,content2:`8.1. 天空图1中缺少两颗明亮的恒星。用叉号（×）将它们添加到图表上。
8.2. 用一个小圆标出今晚木星的大致位置(⚪) 在星图1上。并在旁边写下这颗行星的英文名称（“Jupiter”）。
8.3. 今晚在天空图1的视野中还可以观察到以下哪些行星？用A、B、C或D填写方框□。
A.火星B.土星C.海王星D.天王星
<img src="img/2009obf1.png">`},
{ year:'2009', category:'αβ', type:'OB', name:`9 Skychart 2.0`, content1:`9.1 Where on our planet can we see a night sky shown by sky chart 2? Fill box □  by A, B, C or D.
A. the Northern Hemisphere
B. the Southern Hemisphere
C. the Equatorial
D. both A and B
9.2. Mark the location of the following constellations on sky chart 2 with A, B, C and D.
A.Crux B.Eridanus C.Puppis D. Vela
9.3. Mark the brightest star in sky chart 2 with an open circle ( ⚪ ).`,content2:`9.1 在地球上，我们在哪里可以看到天空图2所示的夜空？用A、B、C或D填写方框□。
A.北半球
B.南半球
C.赤道
D.A和B
9.2. 在星图2上用A、B、C和D标记以下星座的位置。
A.南十字座 B.波江座 C.船底座 D.船帆座
9.3. 用空心圆标记天空图2中最亮的恒星（⚪）.
<img src="img/2009obf2.png">`},
{ year:'2010', category:'αβ', type:'location', name:`参赛地点信息`, content1:` Sudak Crimea<br> UTC +3`,content2:`克里米亚 苏达克<br>东三区`},
	{  year:"2010",   category:"αβ",   type:"TH",   name:"1 Circumpolar stars",   content1:`Usually we consider that there are about 6000 stars in the whole sky which are visible to the naked eye. The refraction near the horizon is 35'. Find, how many more stars visible to the naked eye become circumpolar (which means that they never set) due to refraction: 
1.1 for observer on the North Pole at zero height position (like Polar Bear in a position with its eyes at zero height). 
1.2 for observer on the Equator at zero height position (like Giraffe with the eyes lowered to zero level). 
In your solution include a picture with an image of the Bear on the ices of North Pole and the Giraffe on the Equator, and necessary dimensions and/or angular dimensions used.`,   content2:`通常我们认为整个天空肉眼可见的星星大约有6000颗。地平线附近的折射角为35'。计算由于折射，肉眼可见的多少更多的星星成为极区恒星（即它们永远不会落下）：
1.1 对于处于零高度位置（像眼睛处于零高度的北极熊一样的位置）的北极观测者。
1.2 对于处于零高度位置（像眼睛降到零高度的长颈鹿一样的位置）的赤道观测者。
在你的解决方案中，包括一张北极冰层上的熊和赤道上的长颈鹿的图片，以及必要的尺寸和/或角度尺寸。`  },  
    {  
        year:"2010",   
        category:"αβ",   
        type:"TH",   
        name:"2 Observation of a star",   
        content1:`A star is observed from the Earth. It is found that its magnitude is m1=2.74 when observed at Zenith and m2=2.85 when observed at 45° above the horizon. What would the apparent magnitude m of the star be if observed from above the atmosphere (from a satellite, for example)?`,   
        content2:`从地球上观测一颗恒星。发现其在天顶时的星等为m1=2.74，在距离地平线45°时的星等为m2=2.85。如果从大气层上方（例如从卫星上）观测，该恒星的视星等m是多少？`  
    },  
    {  
        year:"2010",   
        category:"α",   
        type:"TH",   
        name:"3 Parallax",   
        content1:`Like humans, astronomers of Mercury use the same method for definitions of parallaxes and of parsec but measure them in different(their own) units. For example, the distance to Sirius equals to 1.406 mepc (1.406 mercurial parsec). - Describe the most evident system of angular units used by astronomers of Mercury. - Calculate the mercurial diurnal parallax of the Sun and write the answer in “meau”(mercurial angular units - the common angular units for astronomers of Mercury).`,   
        content2:`和水星人一样，水星的天文学家使用相同的方法来定义视差和秒差距，但用不同的（他们自己的）单位来衡量。例如，天狼星的距离等于1.406 mepc（1.406水星秒差距）。-描述水星天文学家使用的最明显的角度单位系统。-计算水星太阳周日视差，并用“meau”（水星角度单位-水星天文学家常用的角度单位）写出答案。`  
    },  
    {  
        year:"2010",   
        category:"α",   
        type:"TH",   
        name:"4 Climate",   
        content1:`There is a reference to climate in Crimea according to observations during 934 months between 1821 and 1991 on the web-site of the XV IAO. The average temperatures in Simferopol in January and July are equal to -0.4 C and +21.2 C respectively according to that data. Imagine a planet whose axis of rotation is perpendicular to the planets' ecliptic. Estimate, what the eccentricity of the planets' orbit should be in order to give climatic seasons identical to the ones in Crimea.`, content2:`根据1821年至1991年934个月的观测，第十五届国际天文学联合会网站上提到了克里米亚的气候。根据该数据，辛菲罗波尔1月和7月的平均气温分别为-0.4°C和+21.2°C。想象一下，一颗行星的旋转轴垂直于行星的黄道。估计一下，为了使气候季节与克里米亚的气候季节相同，行星轨道的偏心率应该是多少。`
	},
	{ year:'2010', category:'β', type:'TH', name:`3 Parallax`, content1:`Like humans, astronomers of Venus use the same method for definitions of parallaxes and of parsec but measure them in different (their own) units. For example, the distance to Sirius equals to 19.6vpc (19.6 venusial parsec).Describe the most evident system of angular units used by astronomers of Venus.Calculate the venusial diurnal parallax of the Sun and write the answer in “vau” (venusial angular units the common angular units for astronomers of Venus).Note: citizens of Venus have two hands (as humans), and 7 fingers at each hand.`,content2:`与人类一样，金星的天文学家使用相同的方法来定义视差和秒差距，但以不同的（自己的）单位进行测量。例如，到天狼星的距离等于19.6vpc（19.6金星秒差距）。描述金星天文学家使用的最明显的角度单位系统。计算太阳的金星日视差，并用“vau”（金星角单位——金星天文学家常用的角单位）写下答案。注：金星公民有两只手（作为人类），每只手有7个手指。`},
	{ year:'2010', category:'β', type:'TH', name:`4 White Dwarf`, content1:`The absolute stellar magnitude of a white dwarf is 14m. Humanoids create a planet similar to the Earth by all parameters (including atmosphere and climate) rotating around this white dwarf. Calculate (estimate) the minimal possible sidereal period of the planet.`,content2:`白矮星的绝对星等是14等。人型生物创造了一颗参数与地球完全相同（包括大气和气候）的围绕白矮星运转的行星。计算（估计）这颗行星的最小公转周期。`},
	{ year:'2010', category:'β', type:'TH', name:`5 ISS`, content1:`The graph presents the change in height of the ISS orbit depending on timeEstimate the average density of the atmosphere at heights around 340-360 km. Consider the orbit to becircular. The mass of ISS is 362 ton. Consider the cross-section of the ISS-complex to be S = 500 m(including the sections of the solar cell array).`,content2:`该图显示了国际空间站轨道高度随时间的变化。估计340-360公里左右高度处的大气平均密度。将轨道视为圆形。国际空间站的质量为362吨。考虑国际空间站综合体的横截面为S=500m（包括太阳能电池阵列的截面）。
	<img src="img/2010thf1.png">`},
{ year:'2010', category:'αβ', type:'DA', name:`6 ZHR`, content1:`The visual observations of meteors are necessary to monitor the meteor showers of the high and intermediate activity. Despite the the fact that the accuracy of the visual observations is much lower than that of the photometrica ones, the large number of observations have large significance for the statistical results.You are provided by supplement papers: the log of the observations and the map of the gnomonic projection with listed meteor events.
1. Observations were organized in Sudak, the local time (LT) used. Please, write in Table 1 the time of thebeginning (T') and the end (Te) ofobservations using Universal time (UT).
2.1. The meteors that belong to the same shower (S) have one radiant. The name of the shower coincides with thename of the constellation where the radiant is situated. Indicate the place on the map where the radiant is situated (for Perseids). List in Table 2 the numbers of meteors(No) that are showed on the map that belong to this stream (see the supplement).
2.2. Determine and list in Table 2 the equatorial coordinates of the radiant (a,δ).
3. Write in Table 2 the date of the maximum of the meteor shower Perseids (in DD.MM format). Estimate (roughly with an accuracy 1h) the beginning (Tᵦ) and the end (Tₑ) of the shower visibility during the night of the maximum.
4. The calculation of the hour number of meteors (ZHR) for the Perseid shower. ZHR is a measure of the shower activity. It can be defined as a number of meteors that are seen by observer during onehour of observations with the favourable conditions and with a radiant situated in zenith. The corresponding formula is:
<img src="img/2010daf1.png">
K-coefficient of the luminosity function that is equal to 2.5
lm -- limiting stellar magnitude (each observer determines this value individually taking the most faint star he or she can observe).
N- observed number of meteors,
F- coefficient correcting the cloudiness of the sky,
Tₑₜₜ-effective time of observations in hours.
hᵣ- the angular altitude of the radiant above the horizon.
4.1. Calculate the mean value of the limiting stellar magnitude (lm) for each interval. Write your results in Table 3.
4.2. Calculate effective time of observations (Tₑₜₜ) for each interval. Write your results in Table 3.ZHR corresponds to the ideal sky condition. lf there is a haze in the sky, some clouds or some extra light (Moon artificial light, twilights ), the visual number of meteors will be decreased, because faint meteors can not be observed.
4.3. Calculate the correction for the cloudiness for each interval (F).
<img src="img/2010daf2.png">
Where k is percentage of the cloudiness, t is corresponding time interval in minutes, and tₜₒₜₐₗ is the total time of observation in a given interval.
<img src="img/2010daf3.png">
Write your results in Table 3.
4.4. Calculate zenith hour number (ZHR) of the meteors for Perseids shower for each interval. Write your results in Table 3.`,content2:`对流星的目视观测对于监测高强度和中等强度的流星雨是必要的。尽管视觉观察的准确性远低于光度测量，但大量的观察对统计结果具有重要意义。补充文件为您提供：观测日志和包含所列流星事件的日晷投影图。
1.观察是在当地时间（LT）苏达克组织的。请在表1中用世界时（UT）填写观测的开始时间（T'）和结束时间（Te）。
2.1. 属于同一阵雨（S）的流星有一个辐射。阵雨的名称与辐射源所在星座的名称相吻合。在地图上标明辐射源所在的位置（对于英仙座）。在表2中列出地图上显示的属于该流的流星数量（否）（见补充）。
2.2. 确定并在表2中列出辐射源的赤道坐标（a，δ）。
3.在表2中填写英仙座流星雨最大值的日期（DD.MM格式）。估计（大致精确到1小时）最大值夜间阵雨能见度的开始（Tᵦ）和结束（Tₑ）。
4.英仙座流星雨流星小时数（ZHR）的计算。ZHR是衡量淋浴活动的指标。它可以被定义为在有利条件下，观察者在一小时的观测中看到的多颗流星，其辐射位于天顶。相应的公式为：
<img src="img/2010daf1.png">
K——光度函数的系数，等于2.5
lm——极限恒星星等（每个观测者通过他或她能观测到的最暗淡的恒星来单独确定这个值）。
N——观测到的流星数量，
F——校正天空云量的系数，
Tₑₜₜ;-观测的有效时间，单位为小时。
hᵣ-地平线以上辐射的角高度。
4.1. 计算每个间隔的极限恒星星等（lm）的平均值。将结果写在表3中。
4.2. 计算每个间隔的观测有效时间（Tₑₜₜ;）。将结果写在表3中。ZHR对应于理想的天空条件。如果天空中有薄雾、云层或一些额外的光线（月球人造光、龙卷风），流星的视觉数量会减少，因为无法观察到微弱的流星。
4.3. 计算每个间隔（F）的云量校正。
<img src="img/2010daf2.png">
其中k是云量的百分比，t是相应的时间间隔（分钟），tₜₒₜₐₗ是给定间隔内的观测总时间。
<img src="img/2010daf3.png">
将结果写在表3中。
4.4. 计算英仙座流星雨每个间隔的天顶小时数（ZHR）。将结果写在表3中。
<img src="img/2010daf4.png">
<img src="img/2010daf5.png">
<img src="img/2010daf6.png">
<img src="img/2010daf7.png">
<img src="img/2010daf8.png">
<img src="img/2010daf9.png">
<img src="img/2010daf10.png">
`},
{ year:'2010', category:'αβ', type:'DA', name:`7 Cataclysmic Variable`, content1:`Photometric data of the cataclysmic variable HS 2332+3905 of WZ-Sge type are given. Magnitude of the variable was changing with the orbital period during the observations.
Objects of this type consist of white dwarf with a late-type secondary.
Table 1 consist of:
	1st column - Julian date (JD),
	2nd column - relative magnitude of the variable (Mg),
	3rd column - phase ofthe orbital period (Phasa).
7.1. What is the year ofthe observations? (January 1st,2000 corresponds to JD= 2451545 )
7.2. With the data of the table l, plot a graph brightness vs. time (“x” axis - time, “y” axis - the magnitude of the system that equals to sum of relative magnitude of the system and magnitude of the comparison star 4.6"). Brightness should increase upward on the vertical axis.
7.3. From the graph you should find the times corresponding to the maximum and minimum brightness
of the system and also corresponding magnitudes of the system at these times. Write these data in the table 2.
Table 2 consist of:
	1st column- JD corresponding to maximum brightness (JDmax)
	2nd column- magnitude in maximum brightness (Mgmax)
	3rd column-JD corresponding to minimum brightness (JDmin)
	4th column - magnitude in minimum brightness (Mgmin)
7.4. Find the orbital period (Pa) of the system using the graphical plot.7.5. Using the ephemeris JD= JD₀+Pₒᵣᵦ*E, find the phases of orbital period corresponding to the magnitudes that you have found. Write these data in the table l, plot a phase diagram (“x” axis - phasesfrom 0 to 1;“'y” axis- magnitudes).
	JD- Julian date (1st column in the table);
	JD₀- Julian date corresponds to the minimum of brightness, the phase is “0”,
	P- orbital period, that you have found by the graph;
	E- number, that consists of integer part N and fractional part Phase,
	N-number of the cycle,
	Phasa- phase, values from 0 to 1. (e. g: 0.1, 0.2, and etc., 1- the complete period).
One of the features of such types of systems is sudden increase in brightness of 6-8 magnitudes (called superoutburst) after which during the attenuation of the super outburst one can observe superhumps(variations ofbrightness with a frequency close to orbital period).7.6. On investigation of the system superoutburst and superhumps were observed. It was found that the period of these superhumps is 2.3 minutes larger than the orbital period. Using the figure 1, the orbital period (that you have found) and the period of superhumps, find the ratio of masses of the components.`,content2:`题目给出了WZ-Sge型灾变变星HS 2332+3905的光度数据。在观测期间，变量的大小随着轨道周期而变化。
这类天体由白矮星和晚型次级恒星组成。
表1包括：
	第一列-儒略历日期（JD），
	第二列-变星（Mg）的星等相对值，
	第三列-轨道周期的相位（Phasa）。
7.1. 观测年份是哪一年？（2000年1月1日相当于2451545儒略日）
7.2. 根据表1的数据，绘制亮度与时间的关系图（“x”轴-时间，“y”轴-系统的星等，等于系统的相对星等和比较星4.6英寸的星等之和）。亮度应在垂直轴上向上增加。
7.3. 从图表中，您应该找到与最大和最小亮度对应的时间
以及这些时间系统的相应幅度。将这些数据写入表2中。
表2包括：
	第1列-最大亮度对应的JD（JDmax）
	第2列-最大亮度（Mgmax）
	第3列JD对应最小亮度（JDmin）
	第4列-最小亮度（Mgmin）
7.4. 使用图形图找到系统的轨道周期（Pa）。7.5。使用星历表JD=JD₀+Pₒᵣᵦ;*E，找到与你找到的星等相对应的轨道周期相位。将这些数据写在表l中，绘制相图（“x”轴-相位从0到1；“y”轴-幅度）。
	JD——儒略历日期（表中第1列）；
	JD₀-儒略历日期对应亮度的最小值，相位为“0”，
	P——轨道周期，你已经通过图表找到了；
	E-数字，由整数部分N和分数部分Phase组成，
	N—循环次数，
	Phasa-相位，值从0到1。（例如：0.1、0.2等，1-完整周期）。
这类系统的一个特征是亮度突然增加6-8个星等（称为超爆发），之后在超爆发衰减期间，人们可以观察到超爆（亮度变化频率接近轨道周期）。对系统超爆发和超峰进行了调查。发现这些超峰的周期比轨道周期大2.3分钟。使用图1，轨道周期（你已经找到了）和超峰的周期，找到双星的质量比。
<img src="img/2010daf11.png">`},
{ year:'2010', category:'αβ', type:'OB', name:`8 Planet Ephemeredes`, content1:`Draw the current positions of Moon, Jupiter, and Sun at the map. Write the constellations in which they are situated, The names of constellations must be written in short Latin form (only three letters). Use the table of the ephemeredes.
俄：Используя таблицу эфемерид, нанесите на карту текушее положение Луны, Юпитера и Солнца. Определите созвездия, в которых они расположены. Название созвездия запишите в трехбуквенном латинском обозначении.`,content2:`在地图上画出月球、木星和太阳的当前位置。写下它们所在的星座，星座的名字必须用简短的拉丁语形式写（只有三个字母）。使用星历表。
<img src="img/2010obf1.png">
<img src="img/2010obf2.png">`},
{ year:'2010', category:'αβ', type:'OB', name:`9 Cygnus`, content1:`You see the Cygnus constellation with the stars not fainter then 5 magnitude. Mark the wrong stars or positions of missing stars.
俄：Перед Вами созвездие Cygnus, в котором указаны звезды до 5-й звездной величины. Укажите лишние звёзды или места, где звёзд не хватает.`,content2:`你可以看到天鹅座比五等亮的恒星。标记错误的恒星或缺失恒星的位置。
<img src="img/2010obf3.png">`},
{ year:'2010', category:'αβ', type:'OB', name:`10 Sky Map`, content1:`Using the sky map determine the astronomical (mean solar) time of today's upper culmination of α star of the constellation which is used at the emblem of XV IAO.
俄：Используя карту звёздного неба, определите среднесолнечное (астрономическое) время сегодняшней верхней кульминации звёзды α созвездия изображенного на емблеме XV IAO.`,content2:`使用天空图确定第十五届国际天文学联合会会徽所用星座α星今天上顶点的天文（平均太阳）时间。
T = ____h ____m`},
{ year:'2011', category:'αβ', type:'location', name:`参赛地点信息`, content1:` Alma-Ata Kazakhstan<br>λ=76°54'54"E<br>φ=43°14'24"N<br> UTC +5`,content2:`哈萨克斯坦 阿拉木图<br>东经76°54'54"<br>北纬43°14'24"<br>东五区`},
{ year:'2011', category:'α', type:'TH', name:`1 Star Observation`, content1:`Observations were done by the naked eye on June 16, 2008, Universal time was used. An observer has registered that a star passed zenith at 0h18m, and at 8h17m its height above the horizon was 87°12'. Find the latitude of the observations.`,content2:`2008年6月16日用目视观测，所记录时间为世界时(UT)。一个观测者观测到一颗恒星经过天顶的时间为0h18m。在8h17m时，它的地平高度为87°12'。找出观测者所在纬度。`},
{ year:'2011', category:'α', type:'TH', name:`2 Planetarium`, content1:`Classical devices "planetaria" are arranged so that each group of stars is projected on adome by a small optical system. Foils with hole-stars of the corresponding sizes are often used as these"'slides" of constellations which are projected on the dome, so that most of the light is blocked by the foil(the black sky appears), and only light through the holes are transmitted (so stars appear). For example. images of 0" stars on the foil have the size l=0.l mm, and stars up to 6m are demonstrated, the focal length of the projecting system is f= 25 cm, and the device has 16 separate projecting systems for every hemisphere. The dome of the planetarium of the observatory “Bobek" has a diameter of 2R = 10 m.Let's suppose that all slides have been removed for replacement by more perfect ones, and the wholelight began to be projected on the dome. What would the total stellar magnitude of the illuminated dome be (the artificial gray sky)? Would it be possible to read a newspaper in such an illuminance?The answer has to include a list of the necessary parameters with formulae and numerical values.`,content2:`经典设备“天文馆”的工作原理是，每组恒星都由一个小型光学系统投影到穹顶上。带有相应大小的孔星的遮光板通常被用作投影在圆顶上的星座的“滑块”，这样大部分光线都被阻挡了（出现了黑色的天空），只有穿过孔的光线被透射了（所以出现了星星）。例如。遮光板上0等恒星的图像大小为l=0.1mm，演示了暗达6m的恒星，投影系统的焦距为f=25cm，该设备每个半球有16个独立的投影系统。天文台“博贝克”天文馆的圆顶直径为2R=10m。假设所有遮光板都被移除，替换为更完美的遮光板，所有光线被投影到圆顶上。被照亮的圆顶（人造灰色天空）的总星等是多少？在这样的照度下能看报纸吗？答案必须包括一系列必要的参数，包括公式和数值。`},
{ year:'2011', category:'β', type:'TH', name:`1 Solar Radiation`, content1:`Find, with how many percents the mass of the Sun is diminishing per year due to its radiation.`,content2:`找出太阳质量每年因辐射而减少的百分比。`},
{ year:'2011', category:'β', type:'TH', name:`2 Planetarium`, content1:`Classical devices "planetaria" are arranged so that each group of stars is projected on a dome by a small optical system. Consider the planetarium of observatory “Bobek" which diameter of the hall (dome) is 2R = 10 m. On slides of the constellations projected on the dome images of 0m stars have the size l = 0.1 mm (foils with hole-stars of the mentioned size are often used as these "slides").
2.1. Estimate what the parameters should be (decide yourself, which parameters are important here) of the objective of this optical system, so that the visitors sitting in the centre of the hall of the planetarium would perceive the "stars" as points (not as circles or nebulae).
2.2. Let's suppose that all slides have been removed for replacement by more perfect ones, and all thelight began to be projected on the dome. What would the total stellar magnitude of the illuminated dome be (the artificial gray sky)? Would it be possible to read a newspaper in such an illuminance? The answers has to include a list of the necessary parameters with formulae and numerical values.`,content2:`经典设备“天文馆”的排列方式是，每组恒星都由一个小型光学系统投影到圆顶上。考虑天文台“博贝克”的天文馆，大厅（圆顶）的直径为2R=10米。在投影在圆顶上的星座幻灯片上，0等恒星的图像大小为l=0.1毫米（通常使用具有上述大小的孔的遮光板作为这些“幻灯片”）。
2.1. 估计这个光学系统的物镜的参数应该是什么（你自己决定，哪些参数在这里很重要），这样坐在天文馆大厅中央的游客就会把“恒星”感知为点（而不是圆或星云）。
2.2. 让我们假设所有的遮光板都已被移除，以便用更完美的遮光板替换，所有的光线都开始投射到圆顶上。被照亮的圆顶（人造灰色天空）的总恒星星等是多少？在这样的光照下看报纸有可能吗？答案必须包括一系列必要的参数，包括公式和数值。`},
{ year:'2011', category:'αβ', type:'TH', name:`3 Marsian Sunrise`, content1:`The Polar Bear (whom was already met in the texts of many International AstronomyOlympiads) was tired to make astronomical observations on Earth. He made a fascinating journey to the North Pole of Mars, and decided to observe a sunrise there. Calculate how long this sunrise lasts. The solution has to include a picture with an image of the Bear on the North Pole of Mars. Necessary sizes or angular sizes should be in the picture. Assume that Mars is spherical and its orbit may be considered circular. Recollect for yourself the necessary information about the Polar Bear.`,content2:`北极熊（在许多国际天文学奥林匹克竞赛的文本中已经见过它）厌倦了在地球上进行天文观测。他前往火星北极进行了一次引人入胜的旅行，并决定在那里观察日出。计算一下日出持续了多长时间。解决方案必须包括一张火星北极熊的照片。图片中应该有必要的尺寸或角度尺寸。假设火星是球形的，它的轨道可以被认为是圆形的。为自己收集有关北极熊的必要信息。`},
{ year:'2011', category:'αβ', type:'TH', name:`4 Jupiterian Photo`, content1:`In the photo of Jupiter that was taken on October 19, 2009, one of the Galilean moonsand its shadow on the disc of the planet can be seen. Jupiter was near the middle of Capricornus constellation when the photo was taken.Find the orbital distance from the moon to the surface of the planet. Determine the name of the moon.The solution should be illustrated by drawings. The name of the moon in the solution and in the drawings should be written (or duplicated) in English.`,content2:`在2009年10月19日拍摄的木星照片中，可以看到一颗伽利略卫星及其在木星盘面上的阴影。拍摄这张照片时，木星位于摩羯座的中心附近。计算月球到行星表面的轨道距离。确定月亮的名字。应通过图纸说明解决方案。解决方案和图纸中的月球名称应使用英语书写（或抄写）。
<img src="img/2011thf1.png">`},
{ year:'2011', category:'αβ', type:'TH', name:`5 Disappear of Jupiter`, content1:`Let us suppose that jupiter suddenly disappeared. The moons of Jupiter became independent bodies.
5.1. Which former Galileo moon(s) and in what case may leave the Solar system?
5.2. Which former Galileo moon(s) and in what case may fall into the Sun?The answers “'which moon” and “in what case” (configurations at the moment of Jupiter disappearance)have to be given in the form of drawings, and calculations should be the base for the answers. The namesof the moons in the solution and in the drawings should be written in English. Consider the orbit of Jupiter(before its disappearance) to be circular.`,content2:`让我们假设木星突然消失了。木星的卫星变成了独立的天体。
5.1. 哪个前伽利略卫星，在什么情况下可能离开太阳系？
5.2. 哪个前伽利略卫星，在什么情况下可能会落入太阳？“哪个卫星”和“在什么情况下”（木星消失时的配置）的答案必须以图纸的形式给出，计算应该是答案的基础。解决方案和图纸中的卫星名称应使用英语书写。考虑木星的轨道（在它消失之前）是圆形的。`},
{ year:'2011', category:'α', type:'DA', name:`6 Saturn`, content1:`You are provided with a series of Saturn images. Find the rotational period for Saturn, and the velocity andthe direction of the movement of unigue formation in the atmosphere of Saturn - Great Northern Disturbance (GND), which appeared on December 8, 2010.
6.1. Use measurements of two images on Saturn on 13 December 2010 to determine the rotational period T for Saturn from the angular change of the GND position during the time interval between two images.
6.2. Plot from all measurements of the GND core a graph showing how the core longitude L depends ontime t. The time should be expressed in hours and parts of hours. Set the time of the first image as zerotime (0.0"). The inclination of the graph must show the direction and the angular velocity of GND.
6.3. Determine the value of radius R=(a+b)/2 at the GND latitude in kilometers and determine the linearvelocity of the GMD core latitude in kilometers using the graph that shows L vs t.
You may neglect the tilt of the equator to the line of sight (the direction Earth-Saturn). In the images, north is up. Saturn's equatorial radius R₀= 60266 km. The planet is rotating counterclockwise if you look from the north pole, or from left to right in the images, The longitude of the central meridian of the planet increases following the planet's rotation. It means that L increases from right to left in the images. Data on the images: date (2010, December, day), time UT (h, m), and LCM, the longitude ofthe central meridian (in degrees) in system of coordinates of planet.On the above drawing you can see the scheme (a view from the North), R is the radius on the GND latitude. Evidently R is smaller than R₀`,content2:`您将获得一系列土星图像。求出土星的自转周期，以及2010年12月8日出现的土星大气中单体形成运动的速度和方向——大北方扰动（GND）。
6.1. 使用2010年12月13日土星上的两幅图像的测量值，根据两幅图像之间的时间间隔内GND位置的角度变化来确定土星的旋转周期T。
6.2. 根据GND核心的所有测量值绘制一张图，显示核经度L如何与时间t相关。时间应以小时和小时的部分表示。将第一张图像的时间设置为零时间（0.0“）。图形的倾斜度必须显示GND的方向和角速度。
6.3. 确定GND纬度处半径R=（a+b）/2的值（单位：公里），并使用显示L与t的图表确定GMD核心纬度的线性速度（单位：千米）。
你可以忽略赤道相对于视线（地球-土星方向）的倾斜。图像上北下南。土星的赤道半径R₀=60266公里。如果你从北极或图像中从左向右看，这颗行星是逆时针旋转的。行星中央子午线的经度随着行星的旋转而增加。这意味着L在图像中从右向左增加。图像数据：日期（2010年12月，日）、时间UT（h，m）和LCM，行星坐标系中中央子午线的经度（单位：度）。在上图中，您可以看到该方案（从北方看），R是GND纬度上的半径。显然R小于R₀
<img src="img/2011daf1.png">
<img src="img/2011daf2.png">
<img src="img/2011daf3.png">`},
{ year:'2011', category:'β', type:'DA', name:`6 Planetary Nebula`, content1:`The table provides the results of the measurements of the wavelength of the spectral line of hydrogen with λ0 = 6562,81Ǻ (Hα) of the planetary nebula NGC 5643 (points shown in the picture on separate sheet). Draw a graph that shows the dependence of the radial velocity of the points on the declination δ. Draw a diagram showing the direction in which each point is moving. Assuming that the extreme points in the table correspond to the boundary of the nebula, calculate the motion velocity (the velocity at which the nebula as a whole approaches or recedes) and the velocity of the nebula expansion.﻿`,content2:`该表提供了行星状星云NGC 5643中λ0=6562,81Ǻ（Hα）的氢谱线波长的测量结果（图中单独列出的点）。绘制一张图表，显示点的径向速度与赤纬δ的关系。绘制一张图表，显示每个点的移动方向。假设表中的极值点对应于星云的边界，计算运动速度（星云整体接近或后退的速度）和星云膨胀的速度。
<img src="img/2011daf4.png">
<img src="img/2011daf5.png">`},
{ year:'2011', category:'αβ', type:'DA', name:`7 Exoplanet`, content1:`Recently astronomers discovered an exoplanet that practically reflects no light and belongs to the class of hot Jupiters. lts mass corresponds to 12 Jupiter's masses, the average orbit radius is 0.036 AU and the period is 2.47 days. The given data about the exoplanet has been obtained with the help of the data from the "Kepler" telescope which continuously monitors the sky region between the constellations Cygnus and Lyra. The device was launched in March 2009 and is capable of seeing not only gas giants, but also planets with the size of Earth. Recently scientists have discovered that exoplanets are capable of causing huge tidal waves in the stars that have a significant influence on the spectral parameters of the emitted light from the star. In fact, with the help of this effect scientists have been able to prove that the planet moves around a star in a circular orbit.
In the graph (see separate sheet) the flux of radiation from the system vs. the phase (phase φ given inradians) can be seen, normalized to the radiation flux from the star.
7.1. During the transit there are four "contacts" when the contour of the smaller object touches the contour of the larger object at one point. The contacts take place in the following order.
First contact: The smaller body is completely outside of the larger and moving inside.
Second contact: The smaller body is completely inside of the larger and continues to moveinwards.
Third contact: The smaller body is completely inside of the larger and moves outwards.
Fourth contact: The smaller body is completely outside of the larger and starts to move away.
In the given graph mark the points of the first, second, third and the fourth contacts. Write in the copybook the value ofthe phase for each contact.
7.2. Determine the duration of the transit (duration of the passage of the disk of planet over the disk of the star).
7.3. Determine the inclination of the orbit (for exoplanets and binary stars the reference plane is assumed to be the "image plane"- the plane that is perpendicular to the line of sight).
7.4. Calculate the radius of the star.
7.5. Calculate the radius of the planet.`,content2:`最近，天文学家发现了一颗几乎不反射光线的系外行星，属于热木星类。它的质量相当于木星的12倍质量，平均轨道半径为0.036天文单位，周期为2.47天。关于这颗系外行星的给定数据是在“开普勒”望远镜的帮助下获得的，该望远镜持续监测天鹅座和天琴座之间的天空区域。该装置于2009年3月发射，不仅能够看到气态巨行星，还能够看到地球大小的行星。最近，科学家们发现，系外行星能够在恒星中产生巨大的潮汐波，对恒星发出的光的光谱参数产生重大影响。事实上，在这种效应的帮助下，科学家们已经能够证明这颗行星围绕一颗恒星在圆形轨道上运行。
在图中（见单独的表格），可以看到系统的辐射通量与相位（在辐射中给出的相位φ）的关系，归一化为恒星的辐射通量。
7.1. 在运输过程中，当较小物体的轮廓在一个点上接触到较大物体的轮廓时，有四个“接触”。接触按以下顺序进行。
第一次接触：行星完全在恒星之外，并在内部移动。
第二次接触：行星完全位于恒星内部，并继续向内移动。
第三次接触：行星完全在恒星内部，向外移动。
第四次接触：行星完全在恒星之外，开始移动。
在给定的图表中标记第一、第二、第三和第四触点的点。在抄本上写下每次接触的相位值。
7.2. 确定凌日的持续时间（行星盘经过恒星盘的持续时间）。
7.3. 确定轨道的倾斜度（对于系外行星和双星，参考平面被假设为“图像平面”，即垂直于视线的平面）。
7.4. 计算恒星的半径。
7.5. 计算行星的半径。
<img src="img/2011daf6.png">`},
{ year:'2011', category:'αβ', type:'OB', name:`1 Jupiterian Moon`, content1:`Bring Jupiter to the centre of field of view of the telescope. Demonstrate the result to the examiner. Draw a picture with the positions of the moons of Jupiter at the moment of observation.

俄：Установите Юпитер в центер поля зрения телескопа. Покажите результат экзаменатору. Зарисуйте располозжение спутников Юпитера на момент наблюдения.`,content2:`将木星带到望远镜视野的中心。向考官展示结果。画一幅木星卫星在观测时刻的位置图。`},
{ year:'2011', category:'αβ', type:'OB', name:`2 α Peg`, content1:`Calculate and write down on the paper the hour angle and horizontal coordinates of α Peg.

俄：Определите и напишите на листке часовой угол и горизонтальные координаты α Peg.`,content2:`计算并在纸上写下室宿一的时角和地平坐标。（省流：请你口算三角函数和反三角函数）`},
{ year:'2011', category:'αβ', type:'OB', name:`3 Cygnus`, content1:`Draw and enumerate in descending order by brightness (1, 2, ...) the eight main stars of the "Cygnus" constellation.

俄：Зарисуйте и пронумеруйте в порядке убывания яркости (1,2,...) восемь основных звёзд созвездия "Cygnus".`,content2:`按亮度（1、2、…）降序绘制并枚举“天鹅座”的八颗主要恒星`},
{ year:'2011', category:'αβ', type:'OB', name:`4 Telescope`, content1:`Calculate the field of view of the telescope in front of you.The focal length of the eyepiece is F=10 mm.

俄：Определите поле зрения телескопа стоящего перед Вами. Фокусное расстояние окуляра F = 10 мм`,content2:`计算你面前望远镜的视场。目镜的焦距为F=10mm。`},
{ year:'2012', category:'αβ', type:'location', name:`参赛地点信息`, content1:` Gwangju Korea
λ=126°50'55"E 
φ=35°9'55"N
 UTC +9`,content2:`韩国 光州
东经126°50'55"
北纬35°9'55"
东九区`},
{ year:'2012', category:'αβ', type:'TH', name:`1 Venusian Transit`, content1:`Recently, on June 6, 2012, an infrequent astronomical phenomenon, transit of Venus across the solar disc, took place. The next transit of Venus will take place only in 2117. Calculate the date of that transit. (Answer without calculations will not be considered even as a partial solution.)`,content2:`最近，在2012年6月6日，发生了一种罕见的天文现象，金星凌日穿过太阳盘。金星的下一次凌日将发生在2117年。计算凌日日期。（没有计算的答案不会被视为答案。）`},
{ year:'2012', category:'αβ', type:'TH', name:`2 Pseudovenusian Transit`, content1:`Recently, on June 6, 2012, an infrequent astronomical phenomenon.transit of Venus across the solar disc took place. Suppose somebody did not understand the phenomenon and ascribed it not to transit of real Venus but of some moon, which we name Pseudovenus, rotating around the Earth in a circular orbit, Find the radius of the orbit of Pseudovenus and diameter of this sky body. Effects due to axial rotating of the Earth should not be taken into account.`,content2:`近，在2012年6月6日，发生了一种罕见的天文现象。金星凌日穿过太阳盘。假设有人不理解这一现象，并将其归因于某个月球的凌日，而不是真正的金星凌日，我们称之为伪金星，它以圆形轨道绕地球旋转，求出伪金星轨道的半径和这个天体的直径。不应考虑地球轴向旋转的影响。`},
{ year:'2012', category:'αβ', type:'TH', name:`3 Old Persons' Star`, content1:`There is ancient legend in Korea that says, if you managed to see the “Old persons’ star" thrice, you are lucky person and will live a long life. The “Old persons’ star”, now known as Canopus, was seen brighter and better in past times, but even now sometimes one can see this star in Korea. Estimate approximately what visible stellar magnitude Canopus may have when observing it from the southern coast of Jeju island (Korea) in the most favorable conditions.The territory of the island is located at latitudes between 33°12' N and 33°34'N and longitudes between 126°09' E and 126°57' E. Take fom the tables and recollect for yourseif the necessary additional information.`,content2:`韩国有一个古老的传说，如果你能三次看到“老人之星”，你就是幸运的人，会活得很长。“老人之恒星”，现在被称为老人星，在过去被看到得更亮更好，但即使现在，在韩国有时也能看到这颗恒星。估计在最有利的条件下从济州岛（韩国）南部海岸观察老人星时，可以看到的恒星星等大约是多少。该岛的领土位于北纬33°12'至北纬33°4'，东经126°09'至126°57'之间。从表格和自己回忆一下必要的附加信息。`},
{ year:'2012', category:'α', type:'TH', name:`4 Stars on Mars`, content1:`As you know, last year the Polar Bear (whom you have already met in the texts ofmany International Astronomy Olympiads) arrived to Mars for astronomical observations. Nowadays his friend Penguin also made a fascinating journey to Mars. At the same instant of time, the Bear andthe Penguin observe stars in zenith and see Canopus and Sirius respectively. Estimate roughly, what is the distance (measured on the Martian surface) between the animals? At what height above the horizon does the Bear observe Sirius? The solution has to include a picture with an image of the Bearand the Penguin on Mars. Necessary sizes or angular sizes should be in the picture. Recollect for yourself the necessary information about the Polar Bear and Penguin.`,content2:`如你所知，去年北极熊（你在许多国际天文学奥林匹克竞赛的文本中都见过它）抵达火星进行天文观测。如今，他的朋友企鹅也进行了一次引人入胜的火星之旅。在同一时刻，熊和企鹅在天顶观测恒星，分别看到了天牛和天狼星。粗略估计一下，动物之间的距离（在火星表面测量）是多少？熊在地平线以上的什么高度观察到天狼星？解决方案必须包括一张火星上熊和企鹅的图片。图片中应该有必要的尺寸或角度尺寸。为自己收集有关北极熊和企鹅的必要信息。`},
{ year:'2012', category:'α', type:'TH', name:`5 Venus and Earth`, content1:`At what maximum distance from the Venus ecliptic the Earth can be visible in the sky from Venus (actually, from a point ouside the Venus atmosphere)? Orbits of the planets may be considered circular.`,content2:`从金星（实际上，从金星大气层外的一个点）在天空中可以看到地球与金星黄道的最大距离是多少？行星的轨道可以被认为是圆形的。`},
{ year:'2012', category:'α', type:'TH', name:`6 Parallaxes`, content1:`In our part of the Galaxy the mean distance between the stars is about 6 light years. Assume that an interferometer can measure parallaxes with an error of +0.001 arc second. How many stars of our Galaxy could have their parallax determined by this interferometer?`,content2:`在银河系的我们这一部分，恒星之间的平均距离约为6光年。假设干涉仪可以测量视差，误差为+0.001弧秒。我们银河系中有多少颗恒星的视差可以通过这个干涉仪来确定？`},
{ year:'2012', category:'β', type:'TH', name:`4 Altair`, content1:`Estimate the density of the star Altair.`,content2:`估算牛郎星的密度。`},
{ year:'2012', category:'β', type:'TH', name:`5 Venus and Earth`, content1:`At what maximum distance from the Venus ecliptic the Earth can be visible at the sky from Venus (actually, from a point ouside the Venus atmosphere)? Orbits of the planets may be considered circular. Estimate the stellar magnitude of the Earth in this situation.`,content2:`从金星（实际上，从金星大气层外的一个点）在天空中可以看到地球与金星黄道的最大距离是多少？行星的轨道可以被认为是圆形的。在这种情况下估计地球的星等。`},
{ year:'2012', category:'β', type:'TH', name:`6 Remote Galaxy`, content1:`Astronomers have discovered a distant galaxy that in the Earth's sky, at the first glance looks like ε Eridani, the same in colour, but 1000 times less in intensity. It appears however, that this galaxy is composed only of stars similar to the Sun in physical characteristics.Find the number of stars in the galaxy.`,content2:`天文学家发现了一个遥远的星系，在地球的天空中，乍一看像天苑四，颜色相同，但亮度低1000倍。然而，这个星系似乎只由物理特征与太阳相似的恒星组成。找出银河系中的恒星数量。`},
{ year:'2012', category:'αβ', type:'DA', name:`7 Fireball`, content1:`A fireball was observed from three different observing sites I, II, III. The position of the observing sites, the altitude and azimuth of start and end points of the fireball’'s trajectory are given in Table 1. Azimuth is measured eastward from the North direction, and altitude measured above the horizon, and both the angular measurements are in degrees. Following the steps below find true trajectory and location on the surface of Earth of fallen debris of the fireball (meteorite).
7.1. You are provided by a scaled marked graph paper. Mark the 3 observing positions (l, ll, lll)and draw a projected trajectory of the fireball as seen on the surface of Earth.
7.2. Calculate the longitude and latitude of start (λₐ, φₐ) and end (λᵦ, φᵦ) points of the fireball and total length L of the trajectory projected on the earth surface.
7.3. Find the heights of starting point hₐ and end point hᵦ. of the fireball’'s trajectory above the surface of Earth.
7.4. Where can you find a meteorite, if it survives passage through the atmosphere and hits the ground? Calculate the longitude and latitude (λ₍, φ₍) of the location of the meteorite on the surface of Earth's.
Finally, redraw the table below to your answer-book and fill the empty cells with you results.`,content2:`从三个不同的观测点I、II、III观测到一个火球。观测点的位置、火球轨迹起点和终点的高度和方位角如表1所示。方位角是从北向东测量的，高度是在地平线以上测量的，两个角度的测量值都是度。按照以下步骤，找到火球（陨石）坠落碎片在地球表面的真实轨迹和位置。
<img src="img/2012daf1.png">
7.1. 您将看到一张按比例标记的图表纸。标记3个观测位置（l，ll，lll），并绘制火球在地球表面上的投影轨迹。
7.2. 计算火球起点（λₐ，φₐ）和终点（λᵦ，φᵦ）的经度和纬度，以及投影在地球表面的轨迹的总长度L。
7.3. 求出火球轨道在地球表面上方的起点hₐ和终点hᵦ的高度。
7.4. 如果陨石在大气层中幸存下来并撞击地面，你在哪里可以找到它？计算陨石在地球表面位置的经度和纬度（λ₍，φ₍）。
最后，将下表重新绘制到您的答案簿中，并用您的结果填充空白单元格。
<img src="img/2012daf2.png">`},
{ year:'2012', category:'α', type:'DA', name:`8 Moon`, content1:`The Korean Astronomy and Space Science Institute (KASl) publishes the Korean Astronomical Almanac every year. You have been provided with an astronomical table extracted from the Korean Astronomical Almanac of 2012 showing the Korean local time of Moon culmination. (See separate sheet, and you may fill the empty cells by necessary content.)
Also you are provided with a scaled marked graph paper to plot graphs.
8.1. Find the date in April 2012 when the Moon is closest to the Earth
8.2. Find the date in March 2012 when the Moon is remotest from the Earth.
8.3. The scaled marked graph paper (a) shows the eccentric orbit of the Moon, the Earth being located at the center. Mark the positions of the Moon by the symbol × on April 19 and April 23 (with labels A19 and A23).
8.4. Calculate the ratio of the apparent angular sizes of the Moon (αₘₒₒₙ) and the Sun (αₛᵤₙ) on July 1.
8.5. Draw on the scaled marked graph paper the geostationary orbit around the Earth in the given scale.`,content2:`韩国天文和空间科学研究所每年出版«韩国天文年鉴»。您已收到一份从2012年«韩国天文年鉴»中提取的天文表，显示了韩国当地的月亮最高点时间。（请参阅单独的表格，您可以用必要的内容填充空白单元格。）
<img src="img/2012daf3.png">
此外，您还将获得一张按比例标记的绘图纸来绘制图表。
8.1. 找出2012年4月月球距离地球最近的日期
8.2. 找出2012年3月月球距离地球最远的日期。
8.3. 按比例标记的图表纸（a）显示了月球的偏心轨道，地球位于中心。在4月19日和4月23日用符号×标记月球的位置（标签为A19和A23）。
8.4. 计算7月1日月球和太阳的视角大小之比。
8.5. 在标有刻度的方格纸上按给定比例绘制绕地球的地球静止轨道。
<img src="img/2012daf4.png">`},
{ year:'2012', category:'β', type:'DA', name:`8 Clusters`, content1:`Using the moving cluster method, the Hyades cluster is known to be 45 pc away. This open cluster is important as a standard candle, because we can use it to determine the distances of other clusters. However, the interstellar medium absorbs light making a star appear fainter and redder, which is called the interstellar extinction Aᵥ and reddening E₍ᵦ₋ᵥ₎, both measured in stellar magnitudes. The true distance modulus can be computed using the relation
<img src="img/2012daf5.png">
The empirical relation between Aᵥ and E₍ᵦ₋ᵥ₎ is
<img src="img/2012daf6.png">
In Tables I and ll, you are provided with photometric data of the stars of the two open clusters. Hyades and NGC 2682.
8.1. Make the colour-magnitude diagrams of the Hyades cluster and NGC 2682 using the provided scaled marked graph paper (A). In the diagrams, draw the main sequence line of each cluster.
8.2. Plot the colour-colour diagrams of the Hyades cluster and NGC 2682 using the provided scaled marked graph paper (B).
8.3. Assuming that the interstellar reddening of Hyades cluster is negligible, derive the interstellar reddening, E₍ᵦ₋ᵥ₎ of NGC 2682.
8.4. Determine the distance to NGC 2682.
8.5. Find the absolute magnitude and colour index (B-V) of the main sequence turn-off star ineach cluster, approximately.
8.6. Which cluster is older? (Write in English "Hyades" or "NGC 2682".)`,content2:`使用移动星团方法，已知毕星团距离我们45秒差距。这个疏散星团作为标准烛光很重要，因为我们可以用它来确定其他星团的距离。然而，星际介质会吸收光线，使恒星看起来更暗、更红，这被称为星际消光Aᵥ和红移E₍ᵦ₋ᵥ₎，两者都是以恒星星等测量的。距离模数公式：
<img src="img/2012daf5.png">
A和E之间的经验关系为
<img src="img/2012daf6.png">
在表I和表II中，您将获得两个疏散星团恒星的光度数据。毕宿星团和NGC 2682。
8.1. 使用提供的按比例标记的图表纸（A）绘制毕星团和NGC 2682的颜色星等图。在图中，绘制每个集群的主序列线。
8.2. 使用提供的按比例标记的绘图纸绘制毕星团和NGC 2682的彩色图（B）。
8.3. 假设毕宿星团的红移可以忽略不计，则推导出NGC 2682的红移E₍ᵦ₋ᵥ₎。
8.4. 确定到NGC 2682的距离。
8.5. 求出每个星团中主序关闭恒星的绝对星等和颜色指数（B-V）。
8.6. 哪个集群更老？（用英文写“Hyades”或“NGC 2682”。）`},
{ year:'2012', category:'αβ', type:'OB', name:`9 Pointing`, content1:`9. Point the direction of the following objects (show it to examiner): 
9.1. the Polaris, 
9.2. the Ecliptic (draw the line following the ecliptic). 
俄：9. Покажите экзаменатору направление на следующие объекты. 
9.1. Полярную звезду, 
9.2. Эклиптику (проведите рукой вдоль линии эклиптики). `,content2:`9.指出以下物体的方向（向考官出示）：
9.1. 北极星，
9.2. 黄道（沿着黄道画一条线）。`},
{ year:'2012', category:'αβ', type:'OB', name:`10 NGC Objects`, content1:`10. Place NGC 869 and NGC 884 in the field of view of the telescope. After identifying the objects, show them to the examiner. 
10.2. Estimate the current hour angle of them (to ± 10 degree accuracy). 
Answer in degrees:_______ .
俄：10. Расположите NGC 869 и NGC 884 в поле зрения телескопа. После нахождения объектов покажите их экзаменатору. 
10.2. Оцените часовой угол этих объектов (с точностью ± 10 градусов). 
Ответ в градусах:_______.`,content2:`10.将NGC 869和NGC 884放在望远镜的视野内。识别物体后，将其展示给考官。
10.2. 估计它们的当前小时角（精确到±10度）。
以度数回答：_______`},
{ year:'2012', category:'αβ', type:'OB', name:`11 M15`, content1:`11. Place M15 in the field of view of the telescope. The finding chart is given. After identifying the object, show it to the examiner.
俄：11. Расположите M15 в поле зрения телескопа. Карта прилагается. После нахождения объекта покажите его экзаменатору. `,content2:`11.将M15放在望远镜的视野内。给出了观测表格。识别物体后，将其展示给考官。`},
{ year:'2012', category:'αβ', type:'OB', name:`12 Mercury`, content1:`12. Estimate the approximate zenith distance of Mercury. 
Answer: 
俄：12. Приблизительно оцените зенитное расстояние Меркурия. 
Ответ: `,content2:`12.估算水星的天顶距。
答案：`},
{ year:'2013', category:'α', type:'TH', name:`1 Starrise in Moletai`, content1:`An observer in Moletai recorded that a star culminated at 02:54 and set at 05:45 on September 8, 2013. Effects of irregularities of the horizon should not be taken into account.
1.1. At what time will the star rise on September 9, 2013?
1.2. In approximately which direction do you need to wait for the rising of the star? Choose one of the alternatives.N,NE,E,SE,S,SW,W,NW. Draw a picture with an explanation.`,content2:`Moletai的一位观察者记录到，一颗恒星在2013年9月8日02:54上中天，并在05:45落下。不考虑地平线不平的影响。
1.1. 2013年9月9日，星星什么时候升起？
1.2. 你需要在大约哪个方向等待恒星的升起？选择一个方向。N、NE、E、SE、S、SW、W、NW。画一幅附有说明的图画。`},
{ year:'2013', category:'α', type:'TH', name:`2 Gliese 581 g`, content1:`This celestial body in the system of the star Gliese 581 is the most Earth-like planet found outside the Solar System, and the exoplanet with the greatest recognized potential for harboring albuminous based life. Estimate orbital period τ of Gliese 581 g. Consider the orbit to be circular.`,content2:`这颗位于恒星格利泽581系统中的天体是太阳系外发现的最像地球的行星，也是公认最有可能存在蛋白生命的系外行星。估算格利泽581g的轨道周期τ。将轨道视为圆形。`},
{ year:'2013', category:'α', type:'TH', name:`3 Observations from 581g`, content1:`3.1. What is the apparent magnitude of our Sun on Gliese 581g?
3.2. what is the approximate constellation in which our Sun will be seen when observed from the planet Gliese 581 g?`,content2:`3.1. 格利泽 581 g上太阳的视星等是多少？
3.2. 从格利泽581g行星观测时，我们的太阳大致位于哪个星座？`},
{ year:'2013', category:'β', type:'TH', name:`1 RadioAstron`, content1:`The RadioAstron project is an international collaborative mission lead by Astro-SpaceCenter of Russian Academy of Sciences, On July 18, 2011 a satellite,«Spektr-R», carrying a 10-m (indiameter) space radio-telescope was launched into an elliptical orbit around the Earth. Together with Earth-based radio-telescopes, «Spektr-R» works as interferometer. RadioAstron operates at the standard radio astronomical wavelengths of 1.19-1.63 cm (K-band), 6.2 cm (C-band), 18 cm (L-band), and 92 cm(P-band). Now «Spektr-R» is rotating in a very elongated orbit with a period t = 8.3 days and a height of perigee h = 600 km from the Earth surface.
1.1. Estimate the maximum resolving power (angular resolution in arcsec)of RadioAstron. Draw a schematic picture, explaining your choice of the situation when it may occur.
1.2. Estimate the resolving power of RadioAstron if the target is observed in the direction of the majoraxis of«Spektr-R»orbit, and also draw a schematic picture.`,content2:`RadioAstron项目是由俄罗斯科学院Astro航天中心领导的一项国际合作任务。2011年7月18日，一颗名为“Spektr-R”的卫星被发射到环绕地球的椭圆轨道上，该卫星搭载了一台10米（内径）的空间射电望远镜。“Spektr-R”与基于地球的射电望远镜一起作为干涉仪工作。RadioAstron在1.19-1.63厘米（K波段）、6.2厘米（C波段）、18厘米（L波段）和92厘米（P波段）的标准射电天文波长下运行。现在，“Spektr-R”正在一个非常长的轨道上旋转，周期t=8.3天，近地点高度h=600公里。
1.1. 估算RadioAstron的最大分辨率（角分辨率，单位为弧秒）。画一幅示意图，解释你对可能发生的情况的选择。
1.2. 如果在“Spektr-R”轨道的长轴方向上观察到目标，则估计RadioAstron的分辨率，并绘制示意图。`},
{ year:'2013', category:'β', type:'TH', name:`2 Gliese 581g`, content1:`This celestial body in the system of the star Gliese 581 is the most Earth-like planet found outside the Solar System, and the exoplanet with the greatest recognized potential for harboringal buminous based life.
2.1. Estimate orbital period τ of Gliese 581 g. Consider the orbit to be circular.
2.2. Assume intelligent life resides on Gliese 581 g. The civilization uses radio-waves. Is it possible to determine the size (diameter) of the planet by observations on RadioAstron («дa-yes» or «нет-no»)?Justify the answer by calculations.`,content2:`这颗位于恒星格利泽581系统中的天体是太阳系外发现的最像地球的行星，也是公认最有可能存在基于白蛋白的生命的系外行星。
2.1. 估算格利泽581g的轨道周期τ。将轨道视为圆形。
2.2. 假设智慧生命存在于格利泽581g上。该文明使用无线电波。是否有可能通过射电天文望远镜的观测来确定这颗行星的大小（直径）（«дa-yes»或«нет-no»）？通过计算来证明答案的合理性。`},
{ year:'2013', category:'β', type:'TH', name:`3 Observations from 581g`, content1:`3.1. What is the apparent magnitude of our Sun and
3.2. what is the approximate constellation in which our Sun will be seen when observed from the planet Gliese 581 g?
3.3.Estimate the angular diameter of the star Gliese 581 when observed from the planet Gliese 581 g.`,content2:`3.1. 我们太阳的视星等是多少
3.2. 从格利泽581g行星观测时，我们的太阳大致位于哪个星座？
3.3.估算从格利泽581g行星观测到的格利泽581恒星的角直径。`},
{ year:'2013', category:'αβ', type:'TH', name:`4 XVIII Centuric Midday`, content1:`(Dubingiai is the nearest town to the accommodation place of XVIII IAO.).There were different systems of units of measurement in the history of science. This problem is to use historical (at present obsolete) units of measurement.
4.1. Calculate the capacity of the solar energy that in the end of the XVIII century fell on the unit of area of the territory in the outskirts of Dubingiai at midday time:in winter, in spring, in autumn, and in summer.The answer must be given using only the «new» physical units, which were coming into operation in those days in this area: horse-powers per square verst.
4.2. Estimate also the capacity of the solar energy incident on a local horse those times. The answer must also be expressed in physical units, which were coming into operation in those days. What can be surprising about the right answer?`,content2:`（Dubingiai是距离XVIII IAO住宿地点最近的城镇。）。科学史上有不同的计量单位体系。这个问题是使用历史（目前过时的）计量单位。
4.1. 计算十八世纪末中午时分落在杜宾盖郊区领土面积单位上的太阳能容量：冬季、春季、秋季和夏季。必须仅使用当时在该领域投入使用的“新”物理单位来给出答案：马力/俄里²。
4.2. 还估计了这些时候当地马的太阳能发电能力。答案也必须用当时正在使用的物理单位来表达。正确答案有什么令人注意的？`},
{ year:'2013', category:'αβ', type:'TH', name:`5 XXI Centuric Midday`, content1:`As is known, the Republic of Lithuania (see map) uses zone with winter time UT+02 and.summer time UT+03. Calculate and draw a conclusion about the following:
5.1. Are there any places in Lithuania, where today (September 8, 2013) the Sun will be exactly in the south at atime when the watches of residents will show just 12:00? («да-yes» or «нет-no»).
5.2. And in general, on the other days of the year, are there such places? («да-yes» or «нет-no»). If "yes", then calculate in what dates, if "no", then justify it by calculations.`,content2:`众所周知，立陶宛共和国（见地图）使用冬季时间UT+02和夏季时间UT+03的时区。计算并得出以下结论：
5.1. 立陶宛有没有地方，在今天（2013年9月8日），当居民的手表只显示12:00时，太阳正好在南方？（“是”或“否”）。
5.2. 一般来说，在一年中的其他日子里，有这样的地方吗？（“是”或“否”）。如果“是”，则计算日期，如果“否”，则通过计算证明其合理性。`},
{ year:'2013', category:'αβ', type:'TH', name:`6 Remnant Supernovae`, content1:`An X-ray image of supernova remnant (SNR) Cas A located at a distance of d = 3400 pc was obtained using Chandra Space Observatory. The negative of this image is shown in Fig. SNR. The boundaries of the SNR region are marked by a circle. The scale of the image is shown in the upper left corner of the figure. A dot located close to the center of the circle is the neutron star - the remaining core of the collapsed star. The rectangular marks outside the circle are given for the reference when determining the center of the circle. Assume that the amount of energy released in the supernova explosion was about Eₛₙ=10⁴⁶J, 1% of which drives the expansion of the remnant. The average density of the matter in the SNR is ρ ≈ 10⁻²¹kg/m³.
6.1. Estimate the age of the SNR Cas A.
6.2. Calculate the average velocity of the motion of the neutron star from the center of the SNR`,content2:`使用钱德拉太空天文台获得了距离d=3400pc的超新星遗迹（SNR）Cas A的X射线图像。此图像的负片如图SNR所示。SNR区域的边界由圆圈标记。图像的比例显示在图的左上角。靠近圆心的一个点是中子星——坍缩恒星的剩余核心。在确定圆心时，给出了圆外的矩形标记作为参考。假设超新星爆炸释放的能量约为Eₛₙ=10⁴⁶J，其中1%驱动了残骸的膨胀。信噪比中物质的平均密度为ρ≈10⁻²¹kg/m³。
6.1. 估计SNR Cas A的年龄。
6.2. 计算中子星从SNR中心运动的平均速度
<img src="img/2013thf3.png">`},

		]; 
