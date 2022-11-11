export default function Footer() {
    return(
        <div className='h-20 bg-blue-700 text-white flex flex-col items-center justify-center'>
            <div className='flex gap-x-5'>
                <span className='cursor-pointer hover:underline'>App</span>
                <span className='cursor-pointer hover:underline'>Marketing</span>
                <span className='cursor-pointer hover:underline'>Finance</span>
                <span className='cursor-pointer hover:underline'>Strategy</span>
                <span className='cursor-pointer hover:underline'>Infrastructure</span>
                <span className='cursor-pointer hover:underline'>Legal</span>
            </div> 
        </div>
    );
}