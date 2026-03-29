// eslint-disable-next-line @typescript-eslint/no-unused-vars
import ilustration from '../../assets/ilustration.png'

export function AuthLayout() {
    return (
        <div className='flex h-full w-full'>
            <div className='w-1/2 h-full'></div>

            <div className='w-1/2 h-full relative'>
                <img src={ilustration} className='absolute object-cover w-full h-full max-w [656px] max-h [960px]'
                />
            </div>

        </div>

    )
}