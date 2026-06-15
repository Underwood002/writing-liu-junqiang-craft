import { Section } from './types'

export const sections: Section[] = [
  {
    id: 1,
    title: '第一篇',
    subtitle: '分野：作文与论文',
    chapters: '第1–3章',
    exercises: [
      {
        id: '1-think-1',
        category: 'think',
        title: '梳理写作类型',
        description: '回想过去一天、一周、一月甚至一年，你都写了哪些类型的文字？你为何要写这些文字？它们的风格、要求有何差异？AI可以参与哪些文字的创作，以何种方式参与？'
      },
      {
        id: '1-think-2',
        category: 'think',
        title: '讨论AI与认知分工',
        description: '有人说AI可以把人类从草拟初稿中解放出来，人类负责高级认知功能。如何区分低级和高级认知功能？两者能否割裂？我们应当如何分配认知资源？'
      },
      {
        id: '1-think-3',
        category: 'think',
        title: '辩论：写作与思考的分化',
        description: 'Paul Graham认为未来人类将分为会写作的和不会写作的两类，进而分化为会思考和不会思考的。你是否同意？如果真的发生，世界将变成什么样？'
      },
      {
        id: '1-write-4',
        category: 'write',
        title: '短篇写作：解释事物运作机理',
        description: '可以是一个APP、一种游戏、一项运动、一件乐器、一台机械、一样饭菜。要求：条理清晰，能让人看完就明白；吸引读者，能让不感兴趣的人产生兴趣。'
      },
      {
        id: '1-write-5',
        category: 'write',
        title: '采访父母：写一份养育成本报告',
        description: '给父母做一次访谈：把你送入大学，他们花了多少钱、多少时间？题目：《时至今日，我花了父母多少钱，多少时间？》'
      },
      {
        id: '1-do-6',
        category: 'do',
        title: '制定时间规划',
        description: '以12周为计：花2–3周确定题目，3周搜索、阅读并整理文献，4周按照框架写作，余下2周左右用于修改和吸收反馈。据此做一个日程表。'
      },
      {
        id: '1-do-7',
        category: 'do',
        title: '注意力训练：番茄工作法',
        description: '买一只手动闹钟，开始用番茄工作法管理注意力。读本书时关手机，坚持10分钟为一个番茄钟，逐渐增加到20分钟。每天3–4个番茄钟（60–80分钟）即为优质学习。'
      }
    ],
    movies: [
      {
        id: '1-movie-1',
        title: '高考',
        year: '2015',
        description: '看看高考的众生相，一边庆幸，一边叹气。思考高考对一个人的长远影响是什么？'
      },
      {
        id: '1-movie-2',
        title: '录取通知',
        year: '2006',
        description: '落榜的同学去哪儿了？若干年后，一张薄薄的录取通知书起了多大作用？'
      },
      {
        id: '1-movie-3',
        title: '力争上游',
        year: '1973',
        description: '看看别人的大学里是怎么学习的。可对比《美国派》（1999），体会两种大学文化的差异。'
      },
      {
        id: '1-movie-4',
        title: '人工智能',
        year: '2001',
        description: '如果机器也有了情感（情感计算方向正在迅猛发展），我们应当如何安放自己的内心？'
      }
    ],
    books: [
      { id: '1-book-1', author: 'Daniel F. Chambliss, Christopher G. Takacs', title: 'How College Works', publisher: 'Harvard University Press', year: '2018' },
      { id: '1-book-2', author: '[美]乔纳森·海特', title: '焦虑的一代：如何养育手机里泡大的孩子', translator: '赵学坤', publisher: '中国纺织出版社', year: '2025' },
      { id: '1-book-3', author: '[美]威廉·德雷谢维奇', title: '优秀的绵羊', translator: '林杰', publisher: '九州出版社', year: '2016' },
      { id: '1-book-4', author: '[英]戈登·鲁格、玛丽安·彼得', title: '给研究生的学术建议', translator: '彭万华', publisher: '北京大学出版社', year: '2009' },
      { id: '1-book-5', author: '[日]伊丹敬之', title: '创造性论文的写法', translator: '吕莉', publisher: '社会科学文献出版社', year: '2004' },
      { id: '1-book-6', author: '[美]约瑟夫·M.博格斯、丹尼斯·W.皮特里', title: '看电影的艺术', translator: '张菁、郭侃俊', publisher: '北京大学出版社', year: '2010' }
    ],
    references: [
      { id: '1-ref-1', citation: 'Paul Graham, "Writes and Write-Nots", 2024年10月', source: '第1章' },
      { id: '1-ref-2', citation: '马春华：《中国家庭儿童养育成本及其政策意涵》，《妇女研究论丛》，2018年第5期', source: '第1章' },
      { id: '1-ref-3', citation: '[瑞典]史蒂夫·诺特伯格：《番茄工作法图解：简单易行的时间管理方法》，大胖译，北京：人民邮电出版社，2011年', source: '第1章' },
      { id: '1-ref-4', citation: '商磊：《困境与压力：大学教师的艰难选择》，《清华大学教育研究》，2008年第2期', source: '第1章' }
    ]
  },
  {
    id: 2,
    title: '第二篇',
    subtitle: '风格：透明玻璃与彩色玻璃',
    chapters: '第4–6章',
    exercises: [
      {
        id: '2-think-1',
        category: 'think',
        title: '辩论：官话该模糊还是精确？',
        description: '奥威尔批评英语已进入腐朽，充斥着含混和表达无能。然而官话的"模糊"可能是有意为之。你的想法是什么？政府文体应当采取什么样的风格？'
      },
      {
        id: '2-think-2',
        category: 'think',
        title: '讨论：品味茧房',
        description: 'AI生成的文字正弥漫在整个网络空间，这类制式化的文风会不会被视为正常？这会对我们的认知产生什么样的影响？'
      },
      {
        id: '2-write-3',
        category: 'write',
        title: '短篇写作：介绍你的专业',
        description: '假设有人跟你咨询高考填报志愿，请介绍你自己的专业。不要搞概念轰炸，多举例；克制情绪，尽量客观。'
      },
      {
        id: '2-write-4',
        category: 'write',
        title: '主题写作：界定"家"的含义',
        description: '请用300字界定家的含义。可聚焦于家的一个侧面（物理空间、经济功能、儿童养育、夫妻关系等）。参考加里·戈茨的《概念界定》。'
      },
      {
        id: '2-do-5',
        category: 'do',
        title: '诊断自己的写作风格',
        description: '翻出以前写的文字，判断属于：A.官腔 B.学术腔 C.翻译腔 D.学生腔 E.完美无缺'
      },
      {
        id: '2-do-6',
        category: 'do',
        title: '收集各类腔调的例子',
        description: '针对官腔、学术腔、学生腔，每类腔调找两个例子。'
      },
      {
        id: '2-do-7',
        category: 'do',
        title: '统计段落与句子',
        description: '统计你的段落行数、字数以及句子的平均长度。'
      },
      {
        id: '2-do-8',
        category: 'do',
        title: '收集难读与好读的文字',
        description: '读到难读的文字时，分析为什么难读。收集最顺畅、最易理解的文字，分析为什么好读。'
      },
      {
        id: '2-do-9',
        category: 'do',
        title: '收集AI腔文字',
        description: '收集几段"AI腔"特别明显的文字，分析AI生成文字的共性和"塑料感"的来源。'
      }
    ],
    movies: [
      {
        id: '2-movie-1',
        title: '海蒂和爷爷',
        year: '2015',
        description: '小女孩眼神中野生的纯真，就像写作中的"透明玻璃"。纯净清澈，情节简单却有力量。'
      },
      {
        id: '2-movie-2',
        title: '内陆帝国',
        year: '2006',
        description: '大卫·林奇最晦涩的作品。如果看不懂这类电影，是怪自己还是怪导演？你还会不会把"晦涩"当"高级"？'
      },
      {
        id: '2-movie-3',
        title: '是，大臣',
        year: '1980–1982',
        description: '载入史册的英剧，官话连篇却张力十足。领略官僚们虚与委蛇的套话。中国版可看《背靠背，脸对脸》（1994）。'
      }
    ],
    books: [
      { id: '2-book-1', author: '[汉]司马迁', title: '史记', publisher: '中华书局', year: '2006' },
      { id: '2-book-2', author: '高尔泰', title: '寻找家园（增订版）', publisher: '北京十月文艺出版社', year: '2011' },
      { id: '2-book-3', author: '陈存仁', title: '银元时代生活史', publisher: '云南人民出版社', year: '2024' },
      { id: '2-book-4', author: '[美]彼得·德鲁克', title: '旁观者：管理大师德鲁克回忆录', translator: '廖月娟', publisher: '机械工业出版社', year: '2009' },
      { id: '2-book-5', author: '[美]史蒂芬·平克', title: '风格感觉：21世纪写作指南', translator: '王烁、王佩', publisher: '机械工业出版社', year: '2018' },
      { id: '2-book-6', author: '[德]叔本华', title: '人生智慧箴言', translator: '李连江', publisher: '商务印书馆', year: '2017' },
      { id: '2-book-7', author: '[美]詹姆斯·彭尼贝克', title: '语言风格的秘密：语言如何透露人们的性格、情感和社交关系', translator: '刘珊', publisher: '机械工业出版社', year: '2018' },
      { id: '2-book-8', author: '[法]雷蒙·格诺', title: '风格练习', translator: '袁筱一', publisher: '人民文学出版社', year: '2018' },
      { id: '2-book-9', author: '[美]哈里·G.法兰克福', title: '论扯淡', translator: '南方朔', publisher: '译林出版社', year: '2008' }
    ],
    references: [
      { id: '2-ref-1', citation: '[英]乔治·奥威尔：《政治与英语》，郭妍俪译，南京：江苏教育出版社，2006年', source: '第4章' },
      { id: '2-ref-2', citation: '[美]加里·戈茨：《概念界定：关于测量、个案和理论的讨论》，尹继武译，重庆：重庆大学出版社，2014年', source: '第4章' },
      { id: '2-ref-3', citation: '[英]乔纳森·林恩、安东尼·杰伊：《是，大臣》，王艺译，北京：生活·读书·新知三联书店，2017年', source: '第5章' }
    ]
  },
  {
    id: 3,
    title: '第三篇',
    subtitle: '提问：问题意识与选题判断',
    chapters: '第7–10章',
    exercises: [
      {
        id: '3-think-1',
        category: 'think',
        title: '辩论：钱学森之问',
        description: '"为什么我们的学校总是培养不出杰出的科技创新人才？"有人觉得这个问题问得不好，因为杰出人才不是培养出来的。你怎么看？'
      },
      {
        id: '3-think-2',
        category: 'think',
        title: '辩论：品味是主观还是客观？',
        description: '一千个人眼里有一千个哈姆雷特，品味能否争论？读布尔迪厄《区分》和福塞尔《格调》后分析。'
      },
      {
        id: '3-think-3',
        category: 'think',
        title: '辩论：幸福的家庭都是相似的吗？',
        description: '托尔斯泰说：幸福的家庭都是相似的，不幸的家庭各有各的不幸。你是否同意？如何分析？'
      },
      {
        id: '3-think-4',
        category: 'think',
        title: '观察你身上的变量',
        description: '看看你身上有哪些变量？取值为何？这些变量的取值如何一步步塑造了你今天的生活状态？'
      },
      {
        id: '3-think-5',
        category: 'think',
        title: '研究TED演讲题目',
        description: '为什么这些想法值得传播？演讲者为什么关注这些话题？可用AI生成爬虫代码，爬取TED Talks标题数据分析。'
      },
      {
        id: '3-think-6',
        category: 'think',
        title: '对比诺贝尔奖与搞笑诺贝尔奖',
        description: '大笑之余，你能体会到些什么？再研究"烂番茄奖""金酸莓奖"。'
      },
      {
        id: '3-write-7',
        category: 'write',
        title: '短篇写作：界定一个概念',
        description: '界定"缘分"（备选：命运、运气、权力、暴力、历史、生命、生活、意义、使命、青春）。搞清概念是什么，不是什么；思考如何变成变量。'
      },
      {
        id: '3-write-8',
        category: 'write',
        title: '主题写作：提出研究问题',
        description: '关于"家"，如何从纷繁复杂的话题中提出一个"以小见大"的疑问？应用"有的……有的……"句型，比较差异、寻找机制。'
      },
      {
        id: '3-do-9',
        category: 'do',
        title: '提出五个议题并提炼疑问',
        description: '思考它们是否可控以及有何研究意义（四把尺子：相关度、时间尺度、研究贡献、跟福祉的距离）。'
      },
      {
        id: '3-do-10',
        category: 'do',
        title: '让AI评估研究选题',
        description: '从技术难度、数据收集、发表前景、领域拥挤度等方面让AI评估选题是否值得做。'
      },
      {
        id: '3-do-11',
        category: 'do',
        title: '把大话题聚焦',
        description: '有同学说"我要研究人性"，怎样把这个硕大无边的话题聚焦为一个可控的问题？'
      },
      {
        id: '3-do-12',
        category: 'do',
        title: '给奶奶讲研究问题',
        description: '把你要研究的问题给你奶奶讲讲，看她能听懂吗？'
      },
      {
        id: '3-do-13',
        category: 'do',
        title: '建立问题囊',
        description: '借鉴李贺做诗囊的做法，收集别人的研究问题、自己想到的有趣现象和奇思妙想。'
      },
      {
        id: '3-do-14',
        category: 'do',
        title: '用"有的……有的……"句型提问',
        description: '用"同样是……，为什么有的……有的……"句型提五个问题。'
      }
    ],
    movies: [
      {
        id: '3-movie-1',
        title: '死亡诗社',
        year: '1989',
        description: '我们是能够自主思考的人类。请向别人提问！请向自己提问！'
      },
      {
        id: '3-movie-2',
        title: '发现的乐趣',
        year: '1981',
        description: 'BBC对费曼的访谈。费曼有一股狂热的解谜热情："面对谜题时，我有一股不服输的死劲。"'
      },
      {
        id: '3-movie-3',
        title: '费马大定理',
        year: '1996',
        description: '怀尔斯10岁时看到费马大定理，开启了解谜的一生。茨威格说："一个人最大的幸福莫过于在人生的中途发现自己此生的使命。"'
      },
      {
        id: '3-movie-4',
        title: '人类消失后的世界',
        year: '2008',
        description: '如果人类突然消失，地球会是什么样子？通过这部纪录片体会反事实推断。'
      }
    ],
    books: [
      { id: '3-book-1', author: '史铁生', title: '好运设计', publisher: '江苏凤凰文艺出版社', year: '2018' },
      { id: '3-book-2', author: '[美]韦恩·C.布斯、格雷戈里·G.卡洛姆、约瑟夫·M.威廉姆斯', title: '研究是一门艺术', translator: '陈美霞、徐毕卿、许甘霖', publisher: '新华出版社', year: '2009' },
      { id: '3-book-3', author: '[美]尼尔·布朗、斯图尔特·基利', title: '学会提问', translator: '吴礼敬', publisher: '机械工业出版社', year: '2019' },
      { id: '3-book-4', author: '[美]戴维·穆尔、威廉·诺茨', title: '统计学的世界', translator: '郑磊', publisher: '中信出版社', year: '2017' },
      { id: '3-book-5', author: '约翰·李维·马丁', title: '领悟统计', translator: '高勇', publisher: '重庆大学出版社', year: '2024' },
      { id: '3-book-6', author: '[瑞士]雷托·U.施奈德', title: '疯狂实验史', translator: '许阳', publisher: '生活·读书·新知三联书店', year: '2009' },
      { id: '3-book-7', author: '[美]马克·亚伯拉罕斯', title: '别客气，请随意使用科学：搞笑诺贝尔奖系列丛书2', translator: '徐俊培', publisher: '浙江大学出版社', year: '2013' },
      { id: '3-book-8', author: '[英]弗里德里希·A.哈耶克', title: '科学的反革命：理性滥用之研究（修订版）', translator: '冯克利', publisher: '译林出版社', year: '2012' },
      { id: '3-book-9', author: '[英]卡尔·波普尔', title: '科学发现的逻辑', translator: '查汝强、邱仁宗、万木春', publisher: '中国美术学院出版社', year: '2008' }
    ],
    references: [
      { id: '3-ref-1', citation: '[英]托马斯·孟：《英国得自对外贸易的财富》，袁南宇译，北京：商务印书馆，2011年', source: '第7章' },
      { id: '3-ref-2', citation: '[法]皮埃尔·布尔迪厄：《区分：判断力的社会批判》，刘晖译，北京：商务印书馆，2015年', source: '第7章' },
      { id: '3-ref-3', citation: '[美]保罗·福塞尔：《格调：社会等级与生活品味》（修订第3版），梁丽真、乐涛、石涛译，北京：北京联合出版公司，2017年', source: '第7章' },
      { id: '3-ref-4', citation: '艾米·韦伯（Amy Webb）:《数据挖掘玩转婚恋网》', source: '第8章' },
      { id: '3-ref-5', citation: '[美]理查德·费曼：《别闹了，费曼先生：科学顽童的故事》，吴程远译，北京：生活·读书·新知三联书店，2005年', source: '第9章' },
      { id: '3-ref-6', citation: '[奥]斯特凡·茨威格：《人类群星闪耀时：十四篇历史人物画像》，高中甫、潘子立译，上海：上海译文出版社，2017年', source: '第9章' }
    ]
  },
  {
    id: 4,
    title: '第四篇',
    subtitle: '阅读：有字之书与无字之书',
    chapters: '第11–13章',
    exercises: [
      {
        id: '4-think-1',
        category: 'think',
        title: '辩论：AI概括式阅读可取吗？',
        description: '有人用AI把书籍概括为200字→1000字→2000字，以此类推。这种阅读方式是否可取？'
      },
      {
        id: '4-think-2',
        category: 'think',
        title: '设计家庭图书馆',
        description: '如果让你建一个家庭图书馆，怎么设计、怎么配置？确定主题，请朋友或AI推荐这一领域的优秀书籍。'
      },
      {
        id: '4-write-3',
        category: 'write',
        title: '短篇写作：概述一本书',
        description: '问自己：作者的主要观点是什么？证据是否可靠？作者在什么情境下写的此书？动机是什么？'
      },
      {
        id: '4-write-4',
        category: 'write',
        title: '主题写作：搜索关于"家"的阅读材料',
        description: '从文学、科普、史学、社会学等不同维度搜索关于"家"的阅读材料。丰富的角度会带来认知红利。'
      },
      {
        id: '4-do-5',
        category: 'do',
        title: '口述史访谈',
        description: '整理家族史，访谈爷爷奶奶甚至更往上的一辈。制定口述史访谈计划，寒暑假访谈10位左右不同行业的人。'
      },
      {
        id: '4-do-6',
        category: 'do',
        title: '发起阅读小组',
        description: '发起线上或线下阅读小组，制定阅读目标。每月统计阅读里程表：读了多少字、多少钱的书。'
      },
      {
        id: '4-do-7',
        category: 'do',
        title: '快闪阅读活动',
        description: '一起去书店或图书馆，每人随机抽取一本书，阅读两小时后分享。方法来自芝加哥大学安德鲁·阿伯特教授。'
      },
      {
        id: '4-do-8',
        category: 'do',
        title: '有声阅读',
        description: '在有声频道听书，或开频道讲述一本书。也可用AI朗读，节约目力，利用碎片时间。'
      }
    ],
    movies: [
      {
        id: '4-movie-1',
        title: '书迷',
        year: '2018',
        description: '豆瓣8.5的国产纪录片，四集记录书迷世界。书店为我们保留了"随机的惊喜"。同类：《但是还有书籍》（2019）。'
      },
      {
        id: '4-movie-2',
        title: '朗读者',
        year: '2008',
        description: '一个宁愿牺牲自由也要掩盖秘密的故事。杀伐果断的女纳粹竟是一个"不阅读，毋宁死"的人。'
      },
      {
        id: '4-movie-3',
        title: '罗生门',
        year: '1950',
        description: '一件并不复杂的命案为何众说纷纭？故事有A面、B面，我们阅读是为了比较差异、寻找机制。'
      }
    ],
    books: [
      { id: '4-book-1', author: '刀尔登', title: '不必读书目', publisher: '山西人民出版社', year: '2017' },
      { id: '4-book-2', author: '[美]莫提默·J.艾德勒、查尔斯·范多伦', title: '如何阅读一本书', translator: '郝明义、朱衣', publisher: '商务印书馆', year: '2004' },
      { id: '4-book-3', author: '[美]克里夫顿·费迪曼、约翰·S.梅杰', title: '一生的读书计划', translator: '马骏娥', publisher: '译林出版社', year: '2013' },
      { id: '4-book-4', author: '刘慈欣、刘瑜、吴思等', title: '我书架上的神明：72位学者谈影响他们人生的书', publisher: '山西人民出版社', year: '2015' },
      { id: '4-book-5', author: '[美]约翰·肯尼思·加尔布鲁思等', title: '哈佛书架：100位哈佛大学教授推荐的最有影响的书', translator: '王月瑞', publisher: '海南出版社', year: '2002' },
      { id: '4-book-6', author: '桑兵、於梅舫、陈欣编', title: '读书法', publisher: '人民出版社', year: '2014' },
      { id: '4-book-7', author: '[美]萨姆·温伯格等', title: '像史家一般阅读：在课堂里教历史阅读素养', translator: '宋家复', publisher: '台湾大学出版中心', year: '2016' },
      { id: '4-book-8', author: '吴军', title: '见识', publisher: '中信出版社', year: '2018' },
      { id: '4-book-9', author: '[美]斯科特·佩奇', title: '多样性红利：工作与生活中最有价值的认知工具', translator: '贾拥民', publisher: '浙江教育出版社', year: '2018' }
    ],
    references: [
      { id: '4-ref-1', citation: '陈龙：《探寻社会学之旅：20位美国社会学家眼中的社会学》，北京：北京大学出版社，2018年', source: '第13章' }
    ]
  },
  {
    id: 5,
    title: '第五篇',
    subtitle: '文献：对比与对话',
    chapters: '第14–16章',
    exercises: [
      {
        id: '5-think-1',
        category: 'think',
        title: '辩论：AI水论文与学术生态',
        description: '《科学》杂志发文指出大批水论文借助AI和公开数据库疯狂注入学术界。学术文献排污口是否有必要？如何设置？'
      },
      {
        id: '5-think-2',
        category: 'think',
        title: '讨论：如何鉴别AI文献的真实性？',
        description: '通过ISBN、DOI来检查是否真实出版，但无法判断质量。还有其他判断指标吗？'
      },
      {
        id: '5-think-3',
        category: 'think',
        title: '辩论：昂贵的论文是否浪费资源？',
        description: '据说一篇论文平均成本超百万，读者不超过十人，55%的论文发表后五年被引次数为零。有什么办法改善？'
      },
      {
        id: '5-write-4',
        category: 'write',
        title: '短篇写作：会议纪要',
        description: '好的会议纪要如同优良的文献综述。注意基本信息要全，讨论过程按议程先后，会议结果写清楚（谁负责什么、时间节点及资源配给）。'
      },
      {
        id: '5-write-5',
        category: 'write',
        title: '主题写作：写一篇文献综述',
        description: '就"家"的主题，搜索三十篇左右专业文献，写1500–2000字的文献综述。高度聚焦于你的研究问题，展现过往研究的研讨脉络。'
      },
      {
        id: '5-do-6',
        category: 'do',
        title: '跟踪顶尖期刊',
        description: '请老师推荐本学科最好的五本杂志，收藏其链接，定期跟踪最新论文。'
      },
      {
        id: '5-do-7',
        category: 'do',
        title: '搜索综述文章',
        description: '针对一个题目，搜索三至五篇中英文综述类文章。'
      },
      {
        id: '5-do-8',
        category: 'do',
        title: '建立文献库',
        description: '在Zotero或其他软件建立文献库。清理库存，把经典文献和核心文献挑出来。'
      },
      {
        id: '5-do-9',
        category: 'do',
        title: '文献五问转化为AI提示词',
        description: '把第16章的"文献五问"转化成AI提示词，用于梳理文献的脉络。'
      }
    ],
    movies: [
      {
        id: '5-movie-1',
        title: '对话尼克松',
        year: '2008',
        description: '福斯特靠"文献"苦功打开缺口，让尼克松低下高傲的头颅。堪称有趣的"They say/I say"过程。同类：《总统班底》（1976）、《聚焦》（2015）。'
      },
      {
        id: '5-movie-2',
        title: '永不妥协',
        year: '2000',
        description: '单亲妈妈埃琳靠厚脸皮和文献功夫打赢硬仗。学校之外的工作跟写论文有共同点：问题意识、文献开矿、斗志。'
      }
    ],
    books: [
      { id: '5-book-1', author: '[美]劳伦斯·马奇、布伦达·麦克伊沃', title: '怎样做文献综述：六步走向成功', translator: '陈静、肖思汉', publisher: '上海教育出版社', year: '2011' },
      { id: '5-book-2', author: '[美]马特·厄普森、C.迈克尔·豪尔、凯文·坎农', title: '怎样玩转信息：研究方法指南', translator: '孙宝库', publisher: '四川文艺出版社', year: '2019' },
      { id: '5-book-3', author: '[美]凯特·L.杜拉宾', title: '芝加哥大学论文写作指南', translator: '雷蕾', publisher: '新华出版社', year: '2015' },
      { id: '5-book-4', author: '[英]柯林·内维尔', title: '学术引注规范指南', translator: '张瑜', publisher: '上海教育出版社', year: '2013' },
      { id: '5-book-5', author: '[美]杰拉尔德·格拉夫、凯茜·比肯施泰因', title: '学术写作要领', translator: '王宇丹', publisher: '新华出版社', year: '2012' },
      { id: '5-book-6', author: 'Arthur L. Stinchcombe', title: 'Should Sociologists Forget Their Fathers and Mothers?', year: '1982' },
      { id: '5-book-7', author: '[日]山崎茂明', title: '科学家的不端行为：捏造·篡改·剽窃', translator: '杨舰', publisher: '清华大学出版社', year: '2005' }
    ],
    references: [
      { id: '5-ref-1', citation: 'Cathleen O\'Grady, "Low-Quality Papers are Surging by Exploiting Public Data Sets and AI", Science, 14 May, 2025', source: '第14章' },
      { id: '5-ref-2', citation: '王鸿飞：《一篇论文值多少钱？》，2007年', source: '第14章' },
      { id: '5-ref-3', citation: 'David P. Hamilton, "Research Papers: Who\'s Uncited Now?", Science, Vol.251, No.4989 (1991), p.25', source: '第14章' },
      { id: '5-ref-4', citation: '[美]劳拉·布朗：《完全写作指南：从提笔就怕到什么都能写》，袁婧译，南昌：江西人民出版社，2017年', source: '第15章' }
    ]
  },
  {
    id: 6,
    title: '第六篇',
    subtitle: '论证：观点·理由·证据树形结构',
    chapters: '第17–18章',
    exercises: [
      {
        id: '6-think-1',
        category: 'think',
        title: '辩论：阴谋论是否有道理？',
        description: '事情的发展是"下一盘大棋"还是见招拆招？有人说棋子的最大理想就是下一盘大棋。你怎么看？'
      },
      {
        id: '6-think-2',
        category: 'think',
        title: '辩论：气候变暖是人类造成的吗？',
        description: '对比《难以忽视的真相》（2006）和《全球变暖的大骗局》（2007），总结论证结构，画出观点—理由—证据树形结构。'
      },
      {
        id: '6-write-3',
        category: 'write',
        title: '短篇写作：解读数据（普雷斯顿曲线）',
        description: '就普雷斯顿曲线写三五百字说明：总体上有什么规律？总体之下又有什么小的规律？平衡总结和分析的比重。'
      },
      {
        id: '6-write-4',
        category: 'write',
        title: '主题写作：撰写研究计划',
        description: '写一篇约2000字的研究计划，涵盖研究背景与问题、文献综述、研究方法（变量操作法和数据收集方法）。'
      },
      {
        id: '6-do-5',
        category: 'do',
        title: '辨识情怀党',
        description: '如何辨识情怀党？他们是否有论证？其论证套路是怎样的？'
      },
      {
        id: '6-do-6',
        category: 'do',
        title: '让AI画论证树',
        description: '把文章拖入AI，让它画出论证树：观点、理由和证据。检查哪些观点没有支撑，哪些理由缺乏证据。'
      }
    ],
    movies: [
      {
        id: '6-movie-1',
        title: '十二怒汉',
        year: '1957',
        description: '一场几无悬念的案子为何翻盘？十二个陪审团成员如何论证自己的观点？正义所依赖的基础竟然那么脆弱。同类：《控方证人》（1957）、《杀死一只知更鸟》（1962）。'
      },
      {
        id: '6-movie-2',
        title: '乐趣系列：统计的乐趣 / 逻辑的乐趣 / 数据的乐趣',
        year: '2010–2016',
        description: '科学素养极端重要。每个文科生都应学统计学，理解世界是概率的世界，区分巧合、相关和因果。'
      }
    ],
    books: [
      { id: '6-book-1', author: '[美]约瑟夫·M.威廉姆斯、格雷戈里·G.科洛姆', title: '论证的艺术：以理服人的方法（原书第3版）', translator: '闾佳', publisher: '人民邮电出版社', year: '2022' },
      { id: '6-book-2', author: '[加]布兰登·罗伊尔', title: '一本小小的蓝色逻辑书', translator: '冯亚彬、刘祥亚', publisher: '九州出版社', year: '2016' },
      { id: '6-book-3', author: '[美]欧文·M.柯匹、卡尔·科恩', title: '逻辑学导论（第11版）', translator: '张建军、潘天群', publisher: '中国人民大学出版社', year: '2007' },
      { id: '6-book-4', author: '[瑞典]汉斯·罗斯林等', title: '事实：用数据思考，避免情绪化决策', translator: '张征', publisher: '文汇出版社', year: '2019' },
      { id: '6-book-5', author: '[美]尼尔·布朗、斯图尔特·基利', title: '学会提问（原书第11版）', translator: '吴礼敬', publisher: '机械工业出版社', year: '2019' },
      { id: '6-book-6', author: '[美]丹尼尔·卡尼曼', title: '思考，快与慢', translator: '胡晓姣、李爱民、何梦莹', publisher: '中信出版社', year: '2012' },
      { id: '6-book-7', author: '[美]芭芭拉·明托', title: '金字塔原理：思考、表达和解决问题的逻辑', translator: '汪洱、高愉', publisher: '南海出版公司', year: '2013' },
      { id: '6-book-8', author: '[美]达莱尔·哈夫', title: '统计数字会撒谎', translator: '廖颖林', publisher: '中国城市出版社', year: '2009' },
      { id: '6-book-9', author: '[美]戴维·萨尔斯伯格', title: '女士品茶：统计学如何变革了科学和生活', translator: '刘清山', publisher: '江西人民出版社', year: '2016' }
    ],
    references: [
      { id: '6-ref-1', citation: '[美]罗伯·布莱瑟顿：《为什么我们会相信阴谋论？》，高子梅译，台北：脸谱出版社，2017年', source: '第17章' },
      { id: '6-ref-2', citation: 'Angus Deaton, "Health in an Age of Globalization", Brookings Trade Forum, (2004), pp.83-130', source: '第17章' }
    ]
  },
  {
    id: 7,
    title: '第七篇',
    subtitle: '结构：约束与自由',
    chapters: '第19–22章',
    exercises: [
      {
        id: '7-think-1',
        category: 'think',
        title: '辩论：八股文真的一无是处吗？',
        description: '通常认为八股文格式死板、钳制思想。你是否同意？搜索科举时代的八股文并分析其题目、结构。历年状元的发展是否有显著优势？'
      },
      {
        id: '7-write-2',
        category: 'write',
        title: '短篇写作：概述一次争吵/争论',
        description: '可以是现实中同学之间的争论，也可以是网上的骂战。克制地表达意见：避免情绪化词语，对双方意见细致梳理并评估。'
      },
      {
        id: '7-write-3',
        category: 'write',
        title: '主题写作：按TAIMRDR结构整合初稿',
        description: '关于"家"的某个侧面，按TAIMRDR（标题·摘要·引言·方法·结果·讨论·文献）结构整合素材，产出一篇"初稿"。'
      },
      {
        id: '7-write-4',
        category: 'write',
        title: '缩微论文',
        description: '针对一个问题写1000字缩微论文。标题20字以内，摘要80字，引言（含文献）300字，方法200字，结果200字，讨论150字。不要用AI工具。'
      },
      {
        id: '7-do-5',
        category: 'do',
        title: '生成结构化摘要',
        description: '将文章拖入AI，用"问题·方法·发现·结论"生成结构化摘要。'
      },
      {
        id: '7-do-6',
        category: 'do',
        title: 'AI评估标题',
        description: '用兰德三原则评估标题：恰当（90%）、清晰（5%）、戏剧性（5%），迭代提升。'
      },
      {
        id: '7-do-7',
        category: 'do',
        title: '比较不同学科论文结构',
        description: '比较文学、史学、哲学、经济学、物理学、生物学的论文，看结构的相似点和差异点。'
      },
      {
        id: '7-do-8',
        category: 'do',
        title: '收藏有趣的论文和书籍题目',
        description: '建立一个小的收藏，分析它们为什么吸引你。'
      },
      {
        id: '7-do-9',
        category: 'do',
        title: '引言改成连环刀式结构',
        description: '参照表22-3的例子，将自己论文的引言改成连环刀式的结构。'
      }
    ],
    movies: [
      {
        id: '7-movie-1',
        title: '正午',
        year: '1952',
        description: '完全聚焦在正午时刻，镜头不断对准钟表，堪称以时间线为结构的典范。同类公路片：《绿皮书》（2018）。'
      },
      {
        id: '7-movie-2',
        title: '公民凯恩',
        year: '1941',
        description: '用暗语"玫瑰花蕾"串联故事。可对比《贫民窟的百万富翁》（2008）通过有奖竞赛结构串联。'
      },
      {
        id: '7-movie-3',
        title: '盗梦空间',
        year: '2010',
        description: '以梦境为主题多层嵌套，结构精巧。诺兰的电影大多以结构精巧出名。开放的结尾让人浮想联翩。'
      }
    ],
    books: [
      { id: '7-book-1', author: '彭玉生', title: '"洋八股"与社会科学规范（论文）', publisher: '《社会学研究》2010年第2期', year: '2010' },
      { id: '7-book-2', author: '[德]布吉尔', title: '如何撰写英文生物医学科研论文：论文结构及风格准则', translator: '杜彬', publisher: '北京大学医学出版社', year: '2015' },
      { id: '7-book-3', author: '[英]J.E.戈登', title: '结构：万事万物为什么不会倒塌？', translator: '李轻舟', publisher: '中信出版社', year: '2024' },
      { id: '7-book-4', author: '[美]托马斯·库恩', title: '科学革命的结构（第四版）', translator: '金吾伦、胡新和', publisher: '北京大学出版社', year: '2012' }
    ],
    references: []
  },
  {
    id: 8,
    title: '第八篇',
    subtitle: '流动：微观结构与中观结构',
    chapters: '第23–24章',
    exercises: [
      {
        id: '8-think-1',
        category: 'think',
        title: '辩论：语法规则多了好还是少了好？',
        description: '朱光潜认为中文语法过于简单存在缺陷，而傅乐施则认为中文"是世界上最成熟的语文"。你同意谁的观点？画出观点、理由、证据树形结构。'
      },
      {
        id: '8-write-2',
        category: 'write',
        title: '短篇写作：给过去或未来的自己写信',
        description: '如果你21岁，给12岁的你写信；如果24岁，给42岁的你写信。反思生活，预想未来。'
      },
      {
        id: '8-write-3',
        category: 'write',
        title: '主题写作：精细修改',
        description: '从章节、段落、字句的中微观结构上大量修改关于"家"的稿件。从1.0版到5.6版，重要的文章要改5遍。'
      },
      {
        id: '8-do-4',
        category: 'do',
        title: '用AI润色文字',
        description: '将第23、24章的写作建议转化为AI提示词：主语具体简短、句子接龙、每段一意、主题句、主题链等。'
      },
      {
        id: '8-do-5',
        category: 'do',
        title: '检查页面设计',
        description: '是否运用字体、颜色、行距和段距来设计页面？整体布局是否美观？'
      }
    ],
    movies: [
      {
        id: '8-movie-1',
        title: '大河之恋',
        year: '1992',
        description: '水是最有流动感的事物。自由带来空间也埋下毁灭的种子，约束束缚人性但让我们平安度日。自由与约束之间，有一条大河蜿蜒流过。'
      },
      {
        id: '8-movie-2',
        title: '迁徙的鸟',
        year: '2001',
        description: '能像风和水一样流动的动物就是鸟。耗资四千多万美元的纪录片，呈现流动中的鸟儿。人类不能流动，但想象力可以。'
      }
    ],
    books: [
      { id: '8-book-1', author: 'Wayne C. Booth, Gregory G. Colomb, Joseph M. Williams', title: 'The Craft of Research, Part 4, Chapters 12-14', publisher: 'University of Chicago Press', year: '2008' },
      { id: '8-book-2', author: '[美]史蒂芬·平克', title: '风格感觉：21世纪写作指南（第3–5章）', translator: '王烁、王佩', publisher: '机械工业出版社', year: '2018' },
      { id: '8-book-3', author: '[美]阿图·葛文德', title: '清单革命：如何持续、正确、安全地把事情做好', translator: '王佳艺', publisher: '北京联合出版公司', year: '2017' },
      { id: '8-book-4', author: '[美]罗宾·威廉姆斯', title: '写给大家看的设计书（第4版）', translator: '苏金国、李盼', publisher: '人民邮电出版社', year: '2016' },
      { id: '8-book-5', author: '[美]米哈里·契克森米哈赖', title: '心流：最优体验心理学', translator: '张定绮', publisher: '中信出版社', year: '2017' },
      { id: '8-book-6', author: '[英]马克·米奥多尼克', title: '迷人的液体：33种神奇又危险的流动物质和它们背后的科学故事', translator: '孙亚飞', publisher: '天津科学技术出版社', year: '2019' },
      { id: '8-book-7', author: '[美]艾米·斯图尔特', title: '醉酒的植物学家：创造了世界名酒的植物', translator: '刘夙', publisher: '商务印书馆', year: '2017' }
    ],
    references: [
      { id: '8-ref-1', citation: '[美]鲁道夫·傅乐施：《英文宝典：如何把英文写好，说好，思考好》，汪永祺译，北京：中国展望出版社，1985年', source: '第23章' },
      { id: '8-ref-2', citation: '饶毅：《做自己尊重的人》，北京大学2015年毕业典礼致辞', source: '第23章' }
    ]
  },
  {
    id: 9,
    title: '第九篇',
    subtitle: '故事：理智与情感',
    chapters: '第25–27章',
    exercises: [
      {
        id: '9-think-1',
        category: 'think',
        title: '辩论：故事还是忽悠？',
        description: '说理类文章需要以逻辑和证据为基础，不能借助触动情感。你是否同意？画出观点、理由、证据树形结构。'
      },
      {
        id: '9-think-2',
        category: 'think',
        title: '针对不同对象设计谈话内容',
        description: '假设有创业想法，需要跟学生创业老师、风险投资基金、科技创新局负责人汇报。他们的关注点有何不同？如何针对设计？'
      },
      {
        id: '9-write-3',
        category: 'write',
        title: '短篇写作：旁听对话写故事',
        description: '留心听路人打电话，发挥想象力补齐另一半对话，写一个不超过五百字的故事。作业的美妙之处在于"随缘"。'
      },
      {
        id: '9-write-4',
        category: 'write',
        title: '主题写作：给文章一个好卖相',
        description: '定位读者——他们对什么感兴趣？提炼一句极为洗练的话。运用马奇三原则：详尽到足以让人感兴趣、简单到足以让人理解、可信到足以让人接受。'
      },
      {
        id: '9-write-5',
        category: 'write',
        title: '创作六词小说或八字小说',
        description: '如"死于十八，葬于八十"，上半句和下半句形成张力。可以用AI提供初期想法，然后鉴别、提升。'
      },
      {
        id: '9-do-6',
        category: 'do',
        title: '总结故事结构',
        description: '总结《灰姑娘》《喜羊羊与灰太狼》《葫芦娃》《哪吒之魔童降世》等故事的结构，特别是悬念和惊喜的设置。'
      },
      {
        id: '9-do-7',
        category: 'do',
        title: '建立文字边角料库',
        description: '把用不上的文字放在里面，想想它们为什么会被舍弃。'
      }
    ],
    movies: [
      {
        id: '9-movie-1',
        title: '再见列宁',
        year: '2003',
        description: '难得有学术版和电影版同名的作品，比较论文和电影的故事结构，总结两种体裁讲故事的差异。'
      },
      {
        id: '9-movie-2',
        title: '理智与情感',
        year: '1995',
        description: '简·奥斯汀的妙笔让我们看到两个理想类型：理智的埃莉诺和感性的玛丽安娜。人不像机器那样可靠，也不像机器那样刻板。'
      },
      {
        id: '9-movie-3',
        title: '楚门的世界',
        year: '1998',
        description: '现代技术已把世界变成不受限制的真人秀。现实与虚构、自主与操纵的边界在哪里？同类：《黑镜》系列。'
      },
      {
        id: '9-movie-4',
        title: '对比阅片：《人生大事》vs《入殓师》，《好东西》vs《巴格达咖啡馆》',
        year: '1987–2024',
        description: '体会两种叙事节奏的差异：全程高能式与张弛有度式。哪种让你更舒适？怎样在自己的写作中设置令读者舒适的节奏？'
      }
    ],
    books: [
      { id: '9-book-1', author: '[美]罗伯特·麦基', title: '故事：材质、结构、风格和银幕剧作的原理', translator: '周铁东', publisher: '天津人民出版社', year: '2014' },
      { id: '9-book-2', author: '[美]威廉·E.布隆代尔', title: '《华尔街日报》是如何讲故事的', translator: '徐扬', publisher: '华夏出版社', year: '2006' },
      { id: '9-book-3', author: '[美]霍勒斯·贾德森', title: '创世纪的第八天：20世纪分子生物学革命', translator: '李晓丹', publisher: '上海科学技术出版社', year: '2005' },
      { id: '9-book-4', author: '[美]罗伯特·希勒', title: '叙事经济学', translator: '陆殷莉', publisher: '中信出版社', year: '2020' },
      { id: '9-book-5', author: '[美]特雷西·基德尔、理查德·托德', title: '非虚构的艺术', translator: '黄红宇', publisher: '上海译文出版社', year: '2020' },
      { id: '9-book-6', author: 'Daniel F. Chambliss', title: '"The Mundanity of Excellence"（论文）', year: '1989' }
    ],
    references: [
      { id: '9-ref-1', citation: '[美]赫伯特·西蒙：《人类活动中的理性》，胡怀国、冯科译，桂林：广西师范大学出版社，2016年', source: '第25章' }
    ]
  },
  {
    id: 10,
    title: '第十篇',
    subtitle: '视角：读者意识与过程管理',
    chapters: '第28–30章',
    exercises: [
      {
        id: '10-think-1',
        category: 'think',
        title: '辩论：AI时代文理边界还有意义吗？',
        description: 'AI让文科生可以编程，理科生可以写诗。我们如何构建独特的认知框架？'
      },
      {
        id: '10-think-2',
        category: 'think',
        title: '反向推想：你是作者定位的读者吗？',
        description: '作者跟你的关系是不视、俯视、仰视还是平视？读起来感受如何？如果让你写，会怎么调整姿态和语气？'
      },
      {
        id: '10-write-3',
        category: 'write',
        title: '短篇写作：做你所在地区的观光客',
        description: '"写作人的职责就是将平凡化为生动。"从观光客的角度重新观察你居住的地方，或采访外地人的观感。'
      },
      {
        id: '10-write-4',
        category: 'write',
        title: '主题写作：把文章转为展示文档',
        description: '把关于"家"的文章转换为至多10页PPT。让未来的导师、老板看到你做了一个精彩的展示。参考阿尔·戈尔《难以忽视的真相》。'
      },
      {
        id: '10-do-5',
        category: 'do',
        title: '建立个人董事会',
        description: '挑选四五个信任的人组成"个人董事会"来帮你验证假设和做决定。寻觅写作高手建立反馈回路。'
      },
      {
        id: '10-do-6',
        category: 'do',
        title: '建立锚定书系',
        description: '把让你反复研读、高度认同的著作收集起来，放在书架与视线平行的那一层。跟AI一起探讨这本书为什么好。'
      },
      {
        id: '10-do-7',
        category: 'do',
        title: '制定每日写作计划',
        description: '前两周每天至少200字，第三周每天300字，第四周每天400字。每月计算写作里程。坚持每天10分钟放空式写作，远离屏幕。'
      },
      {
        id: '10-do-8',
        category: 'do',
        title: '建立个人四库',
        description: '素材库、案例库、文献库、数据库。平时多积累好料，喂给AI让它更好地了解你的想法。'
      }
    ],
    movies: [
      {
        id: '10-movie-1',
        title: '影子写手',
        year: '2010',
        description: '写作时最需要转换视角的人莫过于代笔的"枪手"。从对方的角度思考、遣词。同类：《贤妻》（2017），开了诺贝尔奖级别的玩笑。'
      },
      {
        id: '10-movie-2',
        title: '登堂入室',
        year: '2012',
        description: '结合卞之琳《断章》：我们在观察别人，我们的生活也投射在别人的视网膜上。'
      },
      {
        id: '10-movie-3',
        title: '成为简·奥斯汀',
        year: '2007',
        description: '简·奥斯汀的恋爱经历如何体现在《傲慢与偏见》《理智与情感》等一系列小说中？'
      }
    ],
    books: [
      { id: '10-book-1', author: '[美]保罗·J.席尔瓦', title: '文思泉涌：如何克服学术写作拖延症', translator: '胡颖', publisher: '上海教育出版社', year: '2015' },
      { id: '10-book-2', author: '路遥', title: '早晨从中午开始', publisher: '北京十月文艺出版社', year: '2012' },
      { id: '10-book-3', author: '严耕望', title: '治史三书（增订版）', publisher: '上海人民出版社', year: '2016' },
      { id: '10-book-4', author: '萧公权', title: '问学谏往录', publisher: '黄山书社', year: '2008' },
      { id: '10-book-5', author: '[美]C.赖特·米尔斯', title: '社会学的想象力（附录：论治学之道）', translator: '陈强、张永强', publisher: '生活·读书·新知三联书店', year: '2005' },
      { id: '10-book-6', author: '[美]吴修铭', title: '注意力经济：如何把大众的注意力变成生意', translator: '李梁', publisher: '中信出版社', year: '2018' },
      { id: '10-book-7', author: '[美]杰瑞米·多诺万', title: 'TED演讲的秘密：18分钟改变世界', translator: '冯颙、安超', publisher: '中国人民大学出版社', year: '2014' }
    ],
    references: [
      { id: '10-ref-1', citation: '[美]娜塔莉·戈德堡：《写出我心：普通人如何通过写作表达自己》，韩良忆、袁小茶译，南宁：广西科学技术出版社，2016年', source: '第28章' },
      { id: '10-ref-2', citation: '"5 Tips to Help You Figure Out What to Do With Your Life", The New York Times, 2017年10月9日', source: '第30章' }
    ]
  }
]

// 附录：写作伴手礼（36条）
export const writingTips: { id: number; title: string; description: string }[] = [
  { id: 1, title: '作文与论文', description: '表层是文体差异，深层乃思维迭代' },
  { id: 2, title: '透明玻璃风', description: '好的文字如透明玻璃般澄澈，而不是如毛玻璃般遮目' },
  { id: 3, title: '易读难写定律', description: '读起来容易的文字，写起来反而很难' },
  { id: 4, title: '三步提问法', description: '从议题始，聚焦疑问，解决问题' },
  { id: 5, title: '沙漏式写作', description: '从宽到窄，从窄到宽，收放自如' },
  { id: 6, title: '谜题测验', description: '听到问题后的第一反应（A.为什么？B.哦。）' },
  { id: 7, title: '"有的……有的……"句型', description: '同样是……，为什么有的……有的……？' },
  { id: 8, title: '变量思维', description: '比较差异，寻找机制；一边控制，一边比较' },
  { id: 9, title: '选题四象限', description: '大问题大意义·大问题小意义·小问题小意义·小问题大意义' },
  { id: 10, title: '死胡同测验', description: '清晰度·是否可解·研究条件·时间·伦理' },
  { id: 11, title: '四把尺子', description: '相关度·时间尺度·研究贡献·跟福祉的距离' },
  { id: 12, title: '对比阅读法', description: '故事有A面，还有B面' },
  { id: 13, title: '文献征引类型', description: '脚注·尾注·夹注' },
  { id: 14, title: '观点·事实·信息·知识', description: '混为一谈则头脑混沌' },
  { id: 15, title: '论证树形结构', description: '根·问题，干·观点，枝·理由，叶·证据' },
  { id: 16, title: '追问下沉法', description: '对于名词，问"何种……"；对动词，问"怎样……"' },
  { id: 17, title: 'WSPC结构', description: '词·句·段·章依次为微观·中观·宏观结构' },
  { id: 18, title: 'TAIMRDR结构', description: '标题·摘要·引言·方法·结果·讨论·文献' },
  { id: 19, title: '非线性写作', description: '结构如填字格，想写哪儿就写哪儿，逐次填空，写完即可' },
  { id: 20, title: '兰德标题法则', description: '恰当（90%）·清晰（5%）·戏剧性（5%）' },
  { id: 21, title: '懒人读者设定', description: '读者不会逐句逐段阅读，帮读者就是帮自己' },
  { id: 22, title: '段落写作', description: '一段一意，首句点题，句子接龙' },
  { id: 23, title: '从一而终式写作', description: '盯住一个问题，一竿子插到底' },
  { id: 24, title: '结构化摘要', description: '问题、方法、发现和结论' },
  { id: 25, title: '连环刀写法', description: '将悖论有序展现，层层递进，呈现洋葱般的构造' },
  { id: 26, title: '怎样定义故事', description: '出事了！' },
  { id: 27, title: '提炼学术故事', description: '重要性·挑战性·创新性' },
  { id: 28, title: '马奇故事三原则', description: '激起兴趣·易于理解·足够可信' },
  { id: 29, title: '情绪反应测验', description: '文章能引起读者的多重情绪感受吗？' },
  { id: 30, title: '送礼测验', description: '作品如礼品，读者会喜欢吗？（山口拓朗）' },
  { id: 31, title: '外行评内行法则', description: '外行评价内行乃世间常态，适者生存' },
  { id: 32, title: '作者与读者的四种关系', description: '不视·俯视·仰视·平视（朱光潜）' },
  { id: 33, title: '先有后好法则', description: '写作如编织；草鞋没样，边打边像' },
  { id: 34, title: '以说带写法', description: '以顺畅的口述带动迟滞的书写' },
  { id: 35, title: '多巴胺法则', description: '表扬要具体，促进对方多巴胺分泌' },
  { id: 36, title: '个人版四库全书', description: '素材库·案例库·文献库·数据库' }
]
