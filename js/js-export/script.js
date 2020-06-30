// async function runScript() {
//     console.clear();
//     let mb = new MusicBlocks();

//     await mb.goForward(100);
//     await mb.goBackward(200);
//     await mb.turnLeft(90);
//     await mb.turnRight(90);
//     await mb.setHeading(45);
//     await mb.drawArc(45, 100);
//     await mb.setBezierControlPoint1(0, 0);
//     await mb.setBezierControlPoint2(100, 100);
//     await mb.drawBezier(200, 200);
//     await mb.scrollXY(100, 100);
//     await mb.setXY(100, 100);
//     console.log("X = " + mb.X);
//     console.log("Y = " + mb.Y);
//     console.log("HEADING = " + mb.HEADING);
//     await mb.clear();

//     for (let i = 0; i < 12; i++) {
//         await mb.goForward(100);
//         if (i < 6) {
//             await mb.turnRight(60);
//         } else {
//             await mb.turnLeft(60);
//         }
//     }
//     await mb.clear();

//     await mb.fillShape(async () => {
//         for (let i = 0; i < 6; i++) {
//             await mb.goForward(100);
//             await mb.turnRight(60);
//         }
//         return mb.ENDFLOW;
//     });
//     await mb.clear();

//     await mb.hollowLine(async () => {
//         for (let i = 0; i < 4; i++) {
//             await mb.goForward(100);
//             await mb.turnRight(90);
//         }
//         return mb.ENDFLOW;
//     });
// }

function runScript() {
    let rightSqr = async mouse => {
        await mouse.hollowLine(async () => {
            for (let i = 0; i < 4; i++) {
                await mouse.goForward(100);
                await mouse.turnRight(90);
            }
            return mouse.ENDFLOW;
        });
        return mouse.ENDFLOW;
    };

    let leftSqr = async mouse => {
        await mouse.hollowLine(async () => {
            for (let i = 0; i < 4; i++) {
                await mouse.goForward(100);
                await mouse.turnLeft(90);
            }
            return mouse.ENDFLOW;
        });
        return mouse.ENDFLOW;
    };

    new Mouse(async mouse => {
        for (let i = 0; i < 12; i++) {
            await mouse.goForward(100);
            if (i < 6) {
                await mouse.turnRight(60);
            } else {
                await mouse.turnLeft(60);
            }
        }
        await mouse.clear();
        await rightSqr(mouse);
    });

    new Mouse(async mouse => {
        for (let i = 0; i < 12; i++) {
            await mouse.goForward(150);
            if (i < 6) {
                await mouse.turnLeft(60);
            } else {
                await mouse.turnRight(60);
            }
        }
        await mouse.clear();
        await leftSqr(mouse);
    });

    MusicBlocks.run();
}
