import WorkCaseStudyTemplate from '../../components/WorkCaseStudyTemplate/WorkCaseStudyTemplate';
import { createPlaceholderWorkData } from '../../data/workPlaceholder';

const data = createPlaceholderWorkData('Mighty Oak Legacy');

export default function WorkMightyOakLegacyPage() {
  return <WorkCaseStudyTemplate data={data} />;
}
