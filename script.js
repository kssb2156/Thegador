window.addEventListener("load", function() {
    const samurai = document.querySelector(".samurai");
    const mainTitle = document.getElementById('mainTitle');
    const subheading = document.querySelector(".subheading");
    const loginButton = document.getElementById('loginButton');

    // สร้าง Audio object ไว้นอกเงื่อนไข
    const attackSound = new Audio('custom/lightning.mp3');

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

        if (keys.w) {
            samurai.classList.add("attack1");
            mainTitle.classList.add("shake");
            subheading.classList.add("shake");
            attackSound.play(); // เรียกใช้คำสั่งเล่นเสียง
        } else if (keys.s) {
            samurai.classList.add("attack");
        } else if (keys.a) {
            samurai.classList.add("run");
            samurai.style.transform = "translate(-50%, -50%) scaleX(-4) scaleY(4)";
        } else if (keys.d) {
            samurai.classList.add("run");
            samurai.style.transform = "translate(-50%, -50%) scaleX(4) scaleY(4)";
        } else {
            samurai.classList.add("idle");
            samurai.style.transform = "translate(-50%, -50%) scale(4)";
        }

        if (!keys.w) {
            mainTitle.classList.remove("shake");
            subheading.classList.remove("shake");
        }
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
    // ลิงก์ไปยังอีกไฟล์ // .. 2 จุด คือย้อนกลับไปโฟร์เดอร์
    loginButton.addEventListener('click', () => {         
        window.location.href = "../Thegador/login/login.html";
        //window.location.replace('../Thegador/login/login.html'); // เปิดหน้าใหม่ไม่สามาถน้อยกลับได้

    });
});