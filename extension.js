var vscode = require('vscode');
var opn = require('opn');

function getWrongFileMsg() {
    if (vscode.env.language == "en") {
        return "Failed to open document.";
    } else if (vscode.env.language == "ko") {
        return "파일을 열 수 없습니다.";
    }
    return "不能打开非HTML或HTM格式的文件";
}

function activate(context) {
    var disposable = vscode.commands.registerCommand('peakchen90.openInBrowser', (e) => {
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
