var vscode = require('vscode');
var opn = require('opn');

function getWrongFileMsg() {
    if (vscode.env.language == "zh-CN") {
        return "不能打开非HTML或HTM格式的文件";
    } else if (vscode.env.language == "zh-TW") {
        return "不能打開非HTML或HTM格式的文​​件";
    } else if (vscode.env.language == "ko") {
        return "HTML 파일을 열 수 없습니다.";
    } else if (vscode.env.language == "ja") {
        return "HTML文書を開くことができませんでした。";
    } else if (vscode.env.language == "es") {
        return "Error al abrir el documento HTML.";
    } else if (vscode.env.language == "fr") {
        return "Impossible d'ouvrir le document HTML.";
    }
    return "Failed to open HTML document.";
}

function activate(context) {
    var disposable = vscode.commands.registerCommand('cmlim107.openInBrowser', (e) => {
        var fileName = e._fsPath;
        if (!/\.html?$/i.test(fileName)) {
            vscode.window.showWarningMessage(getWrongFileMsg());
            return;
        }
        opn(fileName);
    });
    context.subscriptions.push(disposable);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {
}
exports.deactivate = deactivate;
