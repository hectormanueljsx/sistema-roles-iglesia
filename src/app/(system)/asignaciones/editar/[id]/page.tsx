import { AssignmentForm } from '@/modules/assignments/presentation/AssignmentForm';
import type { PageProps } from '@/shared/types';

export default async function Page({ params }: PageProps) {
  const { id } = await params;

  return (
    <div className='flex flex-col gap-10'>
      <AssignmentForm
        action='update'
        id={id}
      />
    </div>
  );
}
