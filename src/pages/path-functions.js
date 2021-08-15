
export function getDate(date){
    var d = new Date(date)
    return d.toLocaleDateString()

}

export function getPost(post){
    return post.toLowerCase().split(" ").join("+")
}
