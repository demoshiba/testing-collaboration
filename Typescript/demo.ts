function demo(para: number): number | string {

    if (para > 12) {
        return 15;
    } 
    return "nottt";
}

const result = demo(10);
console.log(result);

export {}
