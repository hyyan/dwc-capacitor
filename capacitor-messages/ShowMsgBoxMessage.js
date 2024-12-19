((message) => {
    const loadimage = document.getElementById('BBjLoadImage');
    if (loadimage) {
        try {
            loadimage.remove();
        }
        catch (error) {
        }
    }
    window['Capacitor'].Plugins.Dialog.alert({
        title: message.title,
        message: message.text,
    }).then(() => {
        sendClientEvent({
            bbjSessionId: message.bbjSessionId,
            result: 1,
        });
    });
})(message);
