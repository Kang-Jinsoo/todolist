
export default function TodoList() {
    return (
        <div className="rounded-lg flex justify-around h-10">
            <div className="w-5/6 text-center content-center">내용입니다 내용</div>
            <div className="w-1/6 flex justify-around content-center">
                <button>수정</button>
                <button>삭제</button>
            </div>
        </div>
    )
}