export function countBy<T>(items:T[], keyFn:(i: T)=>string):Record<string, number>{
    const counts: Record<string,number>={};
    for(const item of items){
        const key =keyFn(item);
        counts[key]=(counts[key]||0)+1;
    }
    return counts;
}