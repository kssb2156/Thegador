window.addEventListener("load", function() {
    const samurai = document.querySelector(".samurai");
    const mainTitle = document.getElementById('mainTitle');
    const subheading = document.querySelector(".subheading");
    const loginButton = document.getElementById('loginButton');

    const attackSound = new Audio('custom/lightning.mp3');

    // ประกาศตัวแปรสำหรับตำแหน่งและความเร็ว
    let positionX = 50; // เริ่มต้นที่กึ่งกลางหน้าจอ (50% ของความกว้าง)
    const speed = 0.5; // ความเร็วในการเดิน (0.5% ของความกว้างหน้าจอต่อเฟรม)

    let keys = {
        'a': false,
        'd': false,
        's': false,
        'w': false
    };

    const removeAllClasses = () => {
        samurai.classList.remove("idle", "run", "attack", "attack1");
    };

    const setSamuraiState = () => {
        removeAllClasses();

        // ตรวจสอบลำดับการกดปุ่ม (priority)
        if (keys.w) {
            samurai.classList.add("attack1");
            mainTitle.classList.add("shake");
            subheading.classList.add("shake");
            attackSound.play();
        } else if (keys.s) {
            samurai.classList.add("attack");
        } else if (keys.a || keys.d) {
            samurai.classList.add("run");
        } else {
            samurai.classList.add("idle");
        }

        if (!keys.w) {
            mainTitle.classList.remove("shake");
            subheading.classList.remove("shake");
        }
    };

    const gameLoop = () => {
        // อัปเดตตำแหน่งตามปุ่มที่กด
        if (keys.a) {
            positionX -= speed;
            samurai.style.transform = `translate(-50%, -50%) scaleX(-4) scaleY(4)`; // หันซ้าย
        }
        if (keys.d) {
            positionX += speed;
            samurai.style.transform = `translate(-50%, -50%) scaleX(4) scaleY(4)`; // หันขวา
        }

        // จำกัดขอบเขตไม่ให้ตัวละครเดินออกนอกหน้าจอ
        positionX = Math.max(0, Math.min(100, positionX));

        // อัปเดตตำแหน่งจริงของตัวละครใน CSS
        samurai.style.left = `${positionX}%`;

        // เรียกตัวเองซ้ำเพื่อสร้าง Game Loop
        requestAnimationFrame(gameLoop);
    };

    window.addEventListener("keydown", (event) => {
        const key = event.key.toLowerCase();
        if (keys.hasOwnProperty(key)) {
            keys[key] = true;
            setSamuraiState();
        }
    });

    window.addEventListener("keyup", (event) => {
        const key = event.key.toLowerCase();
        if (keys.hasOwnProperty(key)) {
            keys[key] = false;
            setSamuraiState();
        }
    });

    loginButton.addEventListener('click', () => {
        window.location.href = "../Thegador/login/login.html";
    });

    // เริ่ม Game Loop
    gameLoop();
});
