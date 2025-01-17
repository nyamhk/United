import * as time from "../../../time.mjs";
import { settings } from "../../../settings.mjs";
import { structure } from "../../../structure.mjs";

let clock_interval;

export function reload_taskbar() {
    // get all elements
    let taskbar = document.querySelector(structure.taskbar.self);
    let program_launcher = document.querySelector(structure.taskbar.program_launcher.self);
    let programs = document.querySelector(structure.taskbar.programs.self);
    let tray = document.querySelector(structure.taskbar.tray.self);
    let tray_imgs = {
        notif: document.querySelector(structure.taskbar.tray.imgs.notif),
        battery: document.querySelector(structure.taskbar.tray.imgs.battery),
        volume: document.querySelector(structure.taskbar.tray.imgs.volume),
        connection: document.querySelector(structure.taskbar.tray.imgs.connection)
    };
    let clock = document.querySelector(structure.taskbar.clock.self);

    // assign height to variable
    let taskbar_height = settings.desktop.taskbar.height;



    taskbar.style.height = `${taskbar_height}px`;

    if (settings.desktop.taskbar.auto_hide == true) {
        taskbar.onmouseenter = () => {
            taskbar.style.bottom = `0`;
            taskbar.style.opacity = "1";
        };
        taskbar.onmouseleave = () => {
            taskbar.style.bottom = `calc(1px - ${taskbar_height}px)`;
            taskbar.style.opacity = "0";
        };
    };

    program_launcher.style.width = `${taskbar_height}px`;
    if (settings.experimental_mode)
        program_launcher.firstChild.src = "storage/system/icns/nightly.png";
    else program_launcher.firstChild.src = "storage/system/icns/icon.png";

    programs.style = `left: ${taskbar_height}px;
                        width: calc(100% - (${taskbar_height}px * 4) - (${taskbar_height}px * 4))
    `;

    tray.style = `right: calc(${taskbar_height}px * 3);
                    width: calc(${taskbar_height}px * 4)
    `;
    

    clock.style = `right: 0;
                    width: calc(${taskbar_height}px * 3);
                    font-size: calc(${taskbar_height}px / 2)
    `;

    if (clock_interval) clearInterval(clock_interval);
    clock_interval = setInterval(() => {
        let t = time.get_parsed();

        clock.textContent = `${t.hour}:${t.minute}`;
        if (settings.desktop.taskbar.clock.show_seconds == true)
            clock.textContent += `:${t.second}`;
    
        clock.title = t.date;
    }, 1000);
}