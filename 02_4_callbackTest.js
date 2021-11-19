function run() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const start = Date.now();
            for (let i = 0; i < 1000000000; i++) {}
            const end = Date.now();
            console.log(end - start + 'ms');
            resolve();
        }, 1000);
    });
}
 
async function process() {
    await run();
    await run();
    console.log('Done !!!');
}
 
process();
//내부적으로는 비동기로 돈다 await 동기 식으로 함수 종료때까지 기다린다. 그러나 내부적으로 비동기로 돈다 이점은 DB등 복잡한 코드 돌 때 가시성을 높여준다