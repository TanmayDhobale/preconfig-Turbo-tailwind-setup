import { Button } from 'ui';

export default function Page() {
  return (
    <div className='mt-8 items-center space-y-4'>
      <div className='flex w-full justify-center text-3xl font-bold'>
        Welcome to Next + Tailwind CSS + TypeScript (Web App)
      </div>

      <Button className='fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform'>
        happy coding
      </Button>
    </div>
  );
}
