export const logger = {
    assert: function (bool, ...vs) {
        console.assert(bool, ...vs);
    },
    log: function (type = "info", message) {
        const types = ["info", "warning", "error", "debug", "success"];
        const colors = {
            info: {
                color: "#909399",
                backgroundColor: "#f4f4f5",
                borderColor: "#e9e9eb",
            },
            error: {
                color: "#f56c6c",
                backgroundColor: "#fef0f0",
                borderColor: "#fde2e2",
            },
            warning: {
                color: "#e6a23c",
                backgroundColor: "#fdf6ec",
                borderColor: "#faecd8",
            },
            debug: {
                color: "#333333",
                backgroundColor: "#ffffff",
                borderColor: "#e9e9eb",
            },
            success: {
                color: "#67c23a",
                backgroundColor: "#f0f9eb",
                borderColor: "#e1f3d8",
            },
        };
        let styles = ["border-radius: 2px", "padding: 0px 6px"];
        if (types.includes(type)) {
            console.log(colors[type]["color"]);
            styles.push(
                ...[
                    `color: ${colors[type]["color"]}`,
                    `backgroundColor: ${colors[type]["backgroundColor"]}`,
                    `border: 1px solid ${colors[type]["borderColor"]}`,
                ]
            );
        } else {
            styles.push([`color: ${type}`]);
        }
        console.log(styles);
        console.log("%c%s", styles.join(";"), type, message);
    },
    error: function (msg) {
        this.log("error", msg);
    },
};

window.logger = logger;
