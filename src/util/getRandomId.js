// 返回一个随机id
export default function getRandomId(){
    return Date.now()+Math.random().toString(16).slice(2,8)
}