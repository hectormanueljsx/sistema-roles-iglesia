import { MemberForm } from '@/modules/members/presentation/MemberForm.component';
import type { PageProps } from '@/shared/types';

export default async function Page({ params }: PageProps) {
  const { id } = await params;

  return (
    <div className='flex flex-col gap-10'>
      <MemberForm
        action='update'
        id={id}
      />
    </div>
  );
}
