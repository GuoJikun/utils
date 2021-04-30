interface Color {
    color: string;
    backgroundColor: string;
    borderColor: string;
}

export const logger = {
    assert: function (bool: boolean, ...vs: any) {
        console.assert(bool, ...vs);
    },
    log: function (type = "info", message: any) {
        const types = ["info", "warning", "error", "debug", "success"];
        const colors: Record<string, Color> = {
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
            const curColor = colors[type];
            styles.push(
                ...[
                    `color: ${curColor.color}`,
                    `backgroundColor: ${curColor["backgroundColor"]}`,
                    `border: 1px solid ${curColor["borderColor"]}`,
                ]
            );
        } else {
            styles.push(...[`color: ${type}`]);
        }
        console.log(styles);
        console.log("%c%s", styles.join(";"), type, message);
    },
    error: function (msg: any) {
        this.log("error", msg);
    },
};

export default logger;
