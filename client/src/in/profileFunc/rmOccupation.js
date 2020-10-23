export default function(id) {
    return (e)=>{
        this.setState(state => {
        const workList = state.work
        workList.splice(id,1)//從第id個元素開始，刪除1個元素
        const {hasChanged} = state;
        hasChanged.work = true;
        return {work:workList,hasChanged}
        })
    }
};