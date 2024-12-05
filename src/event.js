// class Events {
//     callbacks = [];
//     proxId = 0;


//     emit(eventName, valor) {
//         this.callbacks.forEach((stored) => {
//             if (stored.eventName === eventName) {
//                 stored.chamarDeVolta(valor);
//             }
//         });
//     }


//     on(eventName, chamador, chamarDeVolta) {
//         this.proxId += 1;
//         this.callbacks.push({
//             id: this.proxId,
//             eventName,
//             chamador,
//             chamarDeVolta
//         });
//         return this.proxId;
//     }

//     off(id) {
//         this.callbacks = this.callbacks.filter((stored) => stored.id !== id);
//     }

//     unsubscriber(chamador) {
//         this.callbacks = this.callbacks.filter(
//             (stored) => stored.chamador !==chamador,
//         )
//     }
// }

// export const events = new Events();