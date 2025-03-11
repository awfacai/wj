<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <!-- CSP配置：允许外部脚本和API请求 -->
    <meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self'; connect-src 'self' https://api.ipify.org; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src https://fonts.gstatic.com;">
    <title>纪念王杰 | Dave Wang Tribute</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=Noto+Sans+SC&display=swap');

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Orbitron', 'Noto Sans SC', sans-serif;
        }

        body {
            background: #0a0a15;
            color: #e0e0e0;
            line-height: 1.6;
            padding: 0;
            margin: 0;
            min-height: 100vh;
            overflow-x: hidden;
            position: relative;
            background-image: linear-gradient(45deg, #0a0a15, #1a1a33), radial-gradient(circle, rgba(255, 0, 255, 0.1), transparent 70%);
            background-blend-mode: overlay;
            background-size: cover, cover;
        }

        .container {
            max-width: 1500px;
            margin: 0 auto;
            padding: 20px;
            position: relative;
            z-index: 2;
        }

        /* 樱花特效 */
        .sakura-container {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 1;
        }

        .sakura {
            position: absolute;
            width: 15px;
            height: 15px;
            background: radial-gradient(circle, #ff99cc 20%, #ff66b2 80%);
            clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
            opacity: 0.8;
            animation: fall linear infinite;
        }

        @keyframes fall {
            0% { transform: translateY(-10vh) rotate(0deg); opacity: 0; }
            20% { opacity: 1; }
            100% { transform: translateY(110vh) rotate(720deg); opacity: 0.5; }
        }

        /* 头部 */
        header {
            text-align: center;
            padding: 60px 15px;
            background: linear-gradient(135deg, #1a0033, #003366);
            border-bottom: 6px solid #00ffff;
            position: relative;
            overflow: hidden;
            box-shadow: 0 0 30px rgba(0, 255, 255, 0.6);
        }

        header::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, rgba(255, 0, 255, 0.3), transparent 70%);
            animation: pulse 12s infinite;
        }

        header h1 {
            font-size: 3.5em;
            color: #ff00ff;
            text-shadow: 0 0 15px #ff00ff, 0 0 25px #00ffff, 0 0 40px #ff00ff;
            letter-spacing: 3px;
            text-transform: uppercase;
            position: relative;
            z-index: 2;
            animation: flicker 2.5s infinite alternate;
            word-wrap: break-word;
        }

        .lang-toggle {
            position: fixed;
            top: 10px;
            right: 10px;
            z-index: 1000;
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .lang-toggle button {
            background: linear-gradient(45deg, #ff00ff, #00ffff);
            border: none;
            padding: 10px 15px;
            cursor: pointer;
            border-radius: 20px;
            font-weight: bold;
            color: #fff;
            text-shadow: 0 0 5px #000;
            transition: transform 0.3s, box-shadow 0.3s;
            font-size: 0.9em;
        }

        .lang-toggle button:hover {
            transform: scale(1.1);
            box-shadow: 0 0 15px rgba(0, 255, 255, 0.8);
        }

        /* 通用部分样式 */
        section {
            background: rgba(20, 20, 40, 0.9);
            padding: 30px;
            border-radius: 15px;
            margin-bottom: 40px;
            border: 2px solid #ff00ff;
            box-shadow: 0 0 25px rgba(255, 0, 255, 0.5), inset 0 0 10px rgba(0, 255, 255, 0.3);
            position: relative;
            overflow: hidden;
            animation: fadeIn 2s ease-in-out;
        }

        section::after {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 200%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(0, 255, 255, 0.2), transparent);
            animation: scanline 5s infinite linear;
        }

        h2 {
            color: #00ffff;
            font-size: 2em;
            margin-bottom: 20px;
            text-shadow: 0 0 15px #00ffff;
            letter-spacing: 2px;
            position: relative;
            z-index: 2;
            word-wrap: break-word;
        }

        p {
            font-size: 1em;
            color: #e0e0e0;
            text-shadow: 0 0 5px rgba(255, 255, 255, 0.4);
            position: relative;
            z-index: 2;
            word-wrap: break-word;
        }

        /* 简介部分 */
        .bio .content {
            display: flex;
            flex-direction: column;
            gap: 20px;
            align-items: center;
        }

        .bio img {
            max-width: 100%;
            width: 300px;
            border-radius: 15px;
            border: 3px solid #ff00ff;
            box-shadow: 0 0 30px #ff00ff, 0 0 50px #00ffff;
            transition: transform 0.4s, box-shadow 0.4s;
        }

        .bio img:hover {
            transform: scale(1.05);
            box-shadow: 0 0 40px #ff00ff, 0 0 60px #00ffff;
        }

        .bio .text-content {
            width: 100%;
        }

        .bio .stats {
            margin-top: 15px;
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            justify-content: center;
        }

        .bio .stat-item {
            background: rgba(0, 255, 255, 0.1);
            padding: 10px;
            border-radius: 8px;
            text-align: center;
            border: 1px solid #00ffff;
            font-size: 0.9em;
            flex: 1 1 120px;
            max-width: 150px;
            transition: transform 0.3s;
        }

        .bio .stat-item:hover {
            transform: scale(1.05);
        }

        /* 播放器样式 */
        .player-container {
            display: flex;
            justify-content: center;
            margin: 30px 0;
            position: relative;
            z-index: 2;
            width: 100%;
        }

        audio, video {
            width: 100%;
            max-width: 100%;
            border-radius: 10px;
            border: 2px solid #00ffff;
            box-shadow: 0 0 20px #00ffff, 0 0 40px #ff00ff;
            background: #0a0a15;
        }

        /* 时间线部分 */
        .timeline {
            position: relative;
            padding: 20px 0;
        }

        .timeline-item {
            margin-bottom: 30px;
            position: relative;
            padding: 20px 20px 20px 50px;
            background: rgba(0, 255, 255, 0.08);
            border-radius: 10px;
            box-shadow: 0 0 15px rgba(0, 255, 255, 0.3);
            transition: transform 0.3s, box-shadow 0.3s;
        }

        .timeline-item:hover {
            transform: translateY(-5px);
            box-shadow: 0 0 25px rgba(0, 255, 255, 0.5);
        }

        .timeline-item:before {
            content: '';
            position: absolute;
            left: 15px;
            top: 0;
            width: 4px;
            height: 100%;
            background: linear-gradient(#ff00ff, #00ffff);
            box-shadow: 0 0 10px #ff00ff;
        }

        .timeline-item h3 {
            color: #ff00ff;
            font-size: 1.5em;
            margin-bottom: 10px;
            text-shadow: 0 0 10px #ff00ff;
            word-wrap: break-word;
        }

        /* 专辑亮点 */
        .album-highlights {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            margin-top: 30px;
            justify-content: center;
        }

        .album-card {
            background: rgba(255, 0, 255, 0.1);
            padding: 15px;
            border-radius: 10px;
            border: 2px solid #ff00ff;
            text-align: center;
            box-shadow: 0 0 15px rgba(255, 0, 255, 0.3);
            transition: transform 0.3s, box-shadow 0.3s;
            flex: 1 1 200px;
            max-width: 250px;
        }

        .album-card:hover {
            transform: scale(1.05);
            box-shadow: 0 0 25px rgba(255, 0, 255, 0.5);
        }

        .album-card h4 {
            color: #00ffff;
            font-size: 1.3em;
            margin-bottom: 8px;
            text-shadow: 0 0 10px #00ffff;
            word-wrap: break-word;
        }

        /* 装饰性部分 */
        .decorative {
            background: linear-gradient(135deg, rgba(255, 0, 255, 0.2), rgba(0, 255, 255, 0.2));
            text-align: center;
            padding: 40px 15px;
            border-radius: 15px;
            margin-bottom: 40px;
            border: 2px dashed #00ffff;
            position: relative;
            overflow: hidden;
        }

        .decorative::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, rgba(255, 0, 255, 0.3), transparent 70%);
            animation: pulse 10s infinite;
        }

        .decorative p {
            font-size: 1.4em;
            font-style: italic;
            color: #ff00ff;
            text-shadow: 0 0 15px #ff00ff;
            position: relative;
            z-index: 2;
            word-wrap: break-word;
        }

        /* 粒子效果 */
        .particles {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 0;
        }

        .particle {
            position: absolute;
            width: 5px;
            height: 5px;
            background: #00ffff;
            border-radius: 50%;
            box-shadow: 0 0 10px #00ffff;
            animation: float 20s infinite linear;
        }

        /* 页脚 */
        footer {
            text-align: center;
            padding: 30px 15px;
            font-size: 1em;
            color: #00ffff;
            text-shadow: 0 0 10px #00ffff;
            border-top: 2px solid rgba(255, 0, 255, 0.5);
            position: relative;
            z-index: 2;
            word-wrap: break-word;
        }

        footer .date {
            margin-bottom: 10px;
        }

        footer .copyright {
            margin: 10px 0;
        }

        footer .copyright a {
            color: #ff00ff;
            text-decoration: none;
            text-shadow: 0 0 10px #ff00ff;
            transition: color 0.3s, text-shadow 0.3s;
        }

        footer .copyright a:hover {
            color: #00ffff;
            text-shadow: 0 0 15px #00ffff;
        }

        footer .ip-address {
            font-size: 0.9em;
            color: #e0e0e0;
            text-shadow: 0 0 5px rgba(255, 255, 255, 0.4);
        }

        /* 动画 */
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        @keyframes flicker {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.7; }
        }

        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.15); }
            100% { transform: scale(1); }
        }

        @keyframes scanline {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
        }

        @keyframes float {
            0% { transform: translateY(100vh); opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { transform: translateY(-100vh); opacity: 0; }
        }

        /* 响应式设计 */
        @media (max-width: 768px) {
            .container {
                padding: 15px;
            }

            header {
                padding: 40px 10px;
            }

            header h1 {
                font-size: 2.5em;
            }

            .lang-toggle {
                top: 5px;
                right: 5px;
                gap: 5px;
            }

            .lang-toggle button {
                padding: 8px 12px;
                font-size: 0.8em;
            }

            section {
                padding: 20px;
            }

            h2 {
                font-size: 1.8em;
            }

            p {
                font-size: 0.9em;
            }

            .bio img {
                width: 100%;
                max-width: 250px;
            }

            .bio .stats {
                flex-direction: column;
                align-items: center;
            }

            .bio .stat-item {
                max-width: 100%;
                flex: 1 1 100%;
            }

            .player-container {
                margin: 20px 0;
            }

            .timeline-item {
                padding: 15px 15px 15px 40px;
            }

            .timeline-item h3 {
                font-size: 1.3em;
            }

            .album-highlights {
                flex-direction: column;
                gap: 15px;
            }

            .album-card {
                max-width: 100%;
                flex: 1 1 100%;
            }

            .album-card h4 {
                font-size: 1.2em;
            }

            .decorative {
                padding: 30px 10px;
            }

            .decorative p {
                font-size: 1.2em;
            }

            footer {
                padding: 20px 10px;
                font-size: 0.9em;
            }

            .sakura {
                width: 12px;
                height: 12px;
            }
        }

        @media (max-width: 480px) {
            header h1 {
                font-size: 2em;
            }

            h2 {
                font-size: 1.5em;
            }

            p {
                font-size: 0.85em;
            }

            .bio img {
                max-width: 200px;
            }

            .timeline-item h3 {
                font-size: 1.2em;
            }

            .album-card h4 {
                font-size: 1.1em;
            }

            .decorative p {
                font-size: 1em;
            }

            footer {
                font-size: 0.8em;
            }
        }
    </style>
</head>
<body>
    <!-- 樱花特效 -->
    <div class="sakura-container">
        <div class="sakura" style="left: 5%; animation-duration: 10s;"></div>
        <div class="sakura" style="left: 15%; animation-duration: 12s; animation-delay: 1s;"></div>
        <div class="sakura" style="left: 25%; animation-duration: 15s;"></div>
        <div class="sakura" style="left: 35%; animation-duration: 11s; animation-delay: 2s;"></div>
        <div class="sakura" style="left: 45%; animation-duration: 13s;"></div>
        <div class="sakura" style="left: 55%; animation-duration: 14s; animation-delay: 3s;"></div>
        <div class="sakura" style="left: 65%; animation-duration: 12s;"></div>
        <div class="sakura" style="left: 75%; animation-duration: 16s; animation-delay: 1s;"></div>
        <div class="sakura" style="left: 85%; animation-duration: 10s; animation-delay: 2s;"></div>
        <div class="sakura" style="left: 95%; animation-duration: 13s;"></div>
    </div>

    <!-- 粒子效果 -->
    <div class="particles">
        <div class="particle" style="left: 10%; animation-delay: 0s;"></div>
        <div class="particle" style="left: 30%; animation-delay: 3s;"></div>
        <div class="particle" style="left: 50%; animation-delay: 6s;"></div>
        <div class="particle" style="left: 70%; animation-delay: 9s;"></div>
        <div class="particle" style="left: 90%; animation-delay: 12s;"></div>
    </div>

    <div class="lang-toggle">
        <button id="lang-toggle-btn">English / 中文</button>
    </div>

    <div class="container">
        <header>
            <h1 class="zh">纪念王杰</h1>
            <h1 class="en" style="display: none;">Dave Wang Tribute</h1>
        </header>

        <section class="bio">
            <h2 class="zh">关于王杰</h2>
            <h2 class="en" style="display: none;">About Dave Wang</h2>
            <div class="content">
                <!-- 请替换为《我》专辑封面图片的直链 -->
                <img src="https://example.com/dave-wang-wo-album-cover.jpg" alt="王杰《我》专辑封面">
                <div class="text-content">
                    <p class="zh">
                        王杰，原名王大为，1962年10月20日出生于香港，是华语乐坛的不灭之光。他的嗓音如电流划破寂静，沙哑而充满灵魂的张力。1987年，他以《一场游戏一场梦》点燃了无数夜晚，那首歌如星火般在记忆中闪烁。他的音乐融合了流行、摇滚与深情，如同一场穿越时间的旅程。
                    </p>
                    <p class="en" style="display: none;">
                        Dave Wang, born Wang Dawei on October 20, 1962, in Hong Kong, is an undying light in Chinese music. His voice slices through silence like an electric current, husky and brimming with soul. In 1987, *A Game, A Dream* set countless nights ablaze, a spark flickering in memory. His music weaves pop, rock, and raw emotion into a journey through time.
                    </p>
                    <p class="zh">
                        他不仅是一位歌手，还涉足电影与电视剧，将情感注入每一个画面。命运如波动的信号，他却始终屹立，用歌声点亮80年代末至90年代初的星空。他的作品是时代的印记，是无数人青春的共鸣。
                    </p>
                    <p class="en" style="display: none;">
                        Beyond a singer, he stepped into film and TV, pouring emotion into every frame. Fate wavered like a signal, yet he stood firm, illuminating the starry skies of the late ‘80s and early ‘90s with his voice. His works are a mark of the era, resonating with the youth of many.
                    </p>
                    <div class="stats">
                        <div class="stat-item zh">出生：1962年10月20日</div>
                        <div class="stat-item en" style="display: none;">Born: October 20, 1962</div>
                        <div class="stat-item zh">首张专辑：1987年</div>
                        <div class="stat-item en" style="display: none;">Debut Album: 1987</div>
                        <div class="stat-item zh">代表作：《一场游戏一场梦》</div>
                        <div class="stat-item en" style="display: none;">Hit: "A Game, A Dream"</div>
                    </div>
                </div>
            </div>
        </section>

        <section class="audio-player">
            <h2 class="zh">《红尘有你》</h2>
            <h2 class="en" style="display: none;">"You in the Mortal World"</h2>
            <p class="zh">
                这首歌是王杰的传世之作，旋律如光影交错，歌词如星辰坠落，诉说爱与生命的永恒追寻。它穿越时间，成为无数人内心的灯火。
            </p>
            <p class="en" style="display: none;">
                A timeless creation by Dave Wang, its melody dances like light and shadow, its lyrics fall like stars, narrating the eternal pursuit of love and life. It crosses time, a beacon in countless hearts.
            </p>
            <div class="player-container">
                <!-- 请替换为《红尘有你》的音频直链 -->
                <audio controls>
                    <source src="https://example.com/dave-wang-hongchen-you-ni.mp3" type="audio/mpeg">
                    您的浏览器不支持音频播放。
                </audio>
            </div>
        </section>

        <section class="video-player">
            <h2 class="zh">王杰演唱会</h2>
            <h2 class="en" style="display: none;">Dave Wang Concert</h2>
            <p class="zh">
                这段视频记录了王杰巅峰时期的现场演出，舞台上的他如电光闪耀，每一个音符都如火焰般炽热，点燃了观众的灵魂深处。
            </p>
            <p class="en" style="display: none;">
                This video preserves Dave Wang at his peak, a blazing figure on stage, every note burning like fire, igniting the depths of the audience’s souls.
            </p>
            <div class="player-container">
                <!-- 请替换为王杰演唱会的视频直链 -->
                <video controls>
                    <source src="https://example.com/dave-wang-concert-video.mp4" type="video/mp4">
                    您的浏览器不支持视频播放。
                </video>
            </div>
        </section>

        <section class="timeline">
            <h2 class="zh">王杰人生大事记</h2>
            <h2 class="en" style="display: none;">Dave Wang Milestones</h2>
            <div class="timeline-item">
                <h3 class="zh">1987年 - 《一场游戏一场梦》</h3>
                <h3 class="en" style="display: none;">1987 - "A Game, A Dream"</h3>
                <p class="zh">首张专辑如一道光芒划破夜空，瞬间照亮乐坛，奠定了他的不朽地位。</p>
                <p class="en" style="display: none;">His debut album sliced through the night like a beam, instantly lighting up the music world and cementing his immortal status.</p>
            </div>
            <div class="timeline-item">
                <h3 class="zh">1991年 - 《我》专辑</h3>
                <h3 class="en" style="display: none;">1991 - "Me" Album</h3>
                <p class="zh">这张专辑升华了他的音乐风格，展现了更深层次的情感与灵魂共鸣。</p>
                <p class="en" style="display: none;">This album elevated his style, unveiling deeper emotion and soulful resonance.</p>
            </div>
            <div class="timeline-item">
                <h3 class="zh">2000年后 - 低调与坚持</h3>
                <h3 class="en" style="display: none;">2000s - Low Profile and Perseverance</h3>
                <p class="zh">经历命运的起伏后，他选择隐于幕后，但他的音乐如灯塔般继续闪耀，温暖人心。</p>
                <p class="en" style="display: none;">After fate’s twists, he stepped back, yet his music shone on like a lighthouse, warming hearts.</p>
            </div>
        </section>

        <section class="album-highlights">
            <h2 class="zh">专辑亮点</h2>
            <h2 class="en" style="display: none;">Album Highlights</h2>
            <div class="album-card">
                <h4 class="zh">《一场游戏一场梦》</h4>
                <h4 class="en" style="display: none;">"A Game, A Dream"</h4>
                <p class="zh">1987年的经典，开创了他的音乐传奇。</p>
                <p class="en" style="display: none;">A 1987 classic that launched his musical legend.</p>
            </div>
            <div class="album-card">
                <h4 class="zh">《我》</h4>
                <h4 class="en" style="display: none;">"Me"</h4>
                <p class="zh">1991年的巅峰之作，情感深刻。</p>
                <p class="en" style="display: none;">A 1991 peak, rich with emotion.</p>
            </div>
            <div class="album-card">
                <h4 class="zh">《忘了你忘了我》</h4>
                <h4 class="en" style="display: none;">"Forgetting You, Forgetting Me"</h4>
                <p class="zh">1989年的感人之作，触动心灵。</p>
                <p class="en" style="display: none;">A 1989 heartfelt work, touching the soul.</p>
            </div>
        </section>

        <section class="decorative">
            <p class="zh">"他的歌声，是夜空的脉动，是时间的永恒回响。"</p>
            <p class="en" style="display: none;">"His voice is the pulse of the night, an eternal echo of time."</p>
        </section>

        <footer>
            <p class="date zh">谨以此站纪念王杰及其音乐遗产 | 当前日期：<span id="beijing-date-zh"></span></p>
            <p class="date en" style="display: none;">Dedicated to Dave Wang and his musical legacy | Date: <span id="beijing-date-en"></span></p>
            <p class="copyright"><a href="https://iaw.us.kg" target="_blank">版权所有 © awei</a></p>
            <p class="ip-address">您的IP地址：<span id="user-ip">加载中...</span></p>
        </footer>
    </div>

    <script>
        // 切换语言
        function toggleLanguage() {
            const zhElements = document.querySelectorAll('.zh');
            const enElements = document.querySelectorAll('.en');
            zhElements.forEach(el => {
                el.style.display = el.style.display === 'none' ? 'block' : 'none';
            });
            enElements.forEach(el => {
                el.style.display = el.style.display === 'none' ? 'block' : 'none';
            });
        }

        // 显示北京时间
        function updateBeijingTime() {
            const now = new Date();
            const beijingTime = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Shanghai' }));
            const zhDate = beijingTime.toLocaleString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
            const enDate = beijingTime.toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' });
            document.getElementById('beijing-date-zh').textContent = zhDate;
            document.getElementById('beijing-date-en').textContent = enDate;
        }

        // 获取并显示用户IP地址（直接使用你的代码）
        function getUserIP() {
            const ipDisplay = document.getElementById('user-ip');
            if (!ipDisplay) {
                console.error('未找到IP显示元素');
                return;
            }

            console.log('开始获取IP地址');

            fetch('https://api.ipify.org?format=json')
                .then(response => {
                    console.log('收到响应:', response.status);
                    if (!response.ok) throw new Error('网络请求失败: ' + response.status);
                    return response.json();
                })
                .then(data => {
                    console.log('API返回数据:', data);
                    ipDisplay.textContent = data.ip || '未知IP';
                })
                .catch(error => {
                    console.error('获取IP失败:', error.message || error);
                    ipDisplay.textContent = '无法获取IP地址';
                });
        }

        // 初始化
        window.onload = function() {
            console.log('页面已加载');
            // 添加语言切换事件
            const langToggleBtn = document.getElementById('lang-toggle-btn');
            if (langToggleBtn) {
                langToggleBtn.addEventListener('click', toggleLanguage);
            } else {
                console.error('未找到语言切换按钮');
            }
            // 更新时间和IP
            updateBeijingTime();
            setInterval(updateBeijingTime, 1000);
            getUserIP(); // 页面加载时自动获取IP
        };
    </script>
</body>
</html>
