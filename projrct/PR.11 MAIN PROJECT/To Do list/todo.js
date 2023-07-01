task_btn = document.getElementById("task_item");
        let do_task = [];
        task_btn.addEventListener("click", adddata);

        function adddata() {
            let task_des = document.getElementById("task_des");
            if (task_des.value != "") {
                document.getElementById("err_mg").innerHTML = "";
                let itemdata = {
                    id: Math.floor(Math.random() * 10000000000),
                    task: task_des.value
                };
                do_task.push(itemdata);
                localStorage.setItem("to_do", JSON.stringify(do_task));
                viewdata();
                task_des.value = "";
            } else {
                document.getElementById("err_mg").innerHTML = "Input should not be empty";
            }
        }

        function viewdata() {
            let data = JSON.parse(localStorage.getItem("to_do"));
            let tbl = "";
            data.map((val) => {
                tbl += `
                        <tr>
                            <td><input type="checkbox" name="check" class="d-inline-block ms-3 align-middle"><span class="px-3">${val.task}</span></td>
                            <td class="text-end"><button class="btn del" onclick="deletetask(${val.id})"><i class="fa-solid fa-trash-can text-danger"></i></button>
                                <button class="btn bg-success text-light undo">Undo</button>    
                            </td>
                        </tr>
                `;
            });
            document.getElementById("record").innerHTML = tbl;
        }

        function deletetask(id) {
            let data = JSON.parse(localStorage.getItem("to_do"));
            let del_index = data.findIndex((val) => val.id === id);

            let delbtn = document.querySelectorAll(".btn.del");
            let undobtn = document.querySelectorAll(".undo");
            delbtn[del_index].style.display = "none";
            undobtn[del_index].style.display = "block";
            let stop = setTimeout(untask, 2000);
            function untask() {
                data.map((val, ind) => {
                    if (val.id == id) {
                        data.splice(ind, 1);
                        localStorage.setItem("to_do", JSON.stringify(data));
                    }
                });
                viewdata();
            }
            let ok = undobtn[del_index].addEventListener("click", function () {
                clearTimeout(stop);
                delbtn[del_index].style.display = "inline-block";
                undobtn[del_index].style.display = "none";
            });
        }