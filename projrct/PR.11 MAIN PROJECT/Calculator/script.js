
        let inval = document.getElementById("inval")
        let show = document.getElementById("show")
        let marqueetag = document.getElementById("mark")

        let allbtn = document.getElementsByTagName("button")

        for (let btn of allbtn) {    //add multiple event for remove marqueetag display
            btn.addEventListener("mousedown", multifun)
        }
        let equal_btn = document.getElementById("equal_btn")

        equal_btn.addEventListener("mouseup", equalmultifun)

        inval.addEventListener("keyup", onenter)
        inval.addEventListener("keypress", downenter)
        inval.addEventListener("focus", focusmark) //focus event remove marqueetag display

        function multifun() {
            marqueetag.style.display = "none";
        }
        function equalmultifun(event) {
            marqueetag.style.display = "none";
            show.value = inval.value;
        }

        function clearinput() {
            inval.value = "";
            show.value = "";
            marqueetag.style.display = "block";
        }

        function focusmark() {
            marqueetag.style.display = "none";
        }

        function onenter(event) {
            if (event.key === "Enter") {
                show.value = inval.value;
                inval.value = eval(inval.value);
            }
        }

        function downenter(event) {
            if (event.key === "Enter") {
                event.preventDefault();
            }
        }
