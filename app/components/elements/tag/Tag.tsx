export const Tag = ({ text }: { text: string }) => {
    return (
        <div className="inline-block text-left">
            <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2 py-0.5 rounded ">
                #{" "}{text}
            </span>
        </div>
    )
}