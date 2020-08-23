export class ConfirmationDialogData {
    title: string;
    messageText: string;

    constructor(dialogTitle: string, dialogMessageText: string) {
        this.title = dialogTitle;
        this.messageText = dialogMessageText;
    }
}
