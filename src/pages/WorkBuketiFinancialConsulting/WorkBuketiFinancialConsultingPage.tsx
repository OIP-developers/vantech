import WorkCaseStudyTemplate from '../../components/WorkCaseStudyTemplate/WorkCaseStudyTemplate';
import { createPlaceholderWorkData } from '../../data/workPlaceholder';

const data = createPlaceholderWorkData('Buketi Financial & Consulting');

export default function WorkBuketiFinancialConsultingPage() {
  return <WorkCaseStudyTemplate data={data} />;
}
