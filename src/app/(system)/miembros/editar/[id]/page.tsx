import { MemberForm } from '@/modules/members/presentation/MemberForm';

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function Page({ params }: PageProps) {
  const { id } = await params;

  return (
    <div className='flex flex-col gap-10'>
      <MemberForm
        action='update'
        memberId={id}
      />
    </div>
  );
}
