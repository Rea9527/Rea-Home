
import Overview from './pages/Home/Overview.vue'
import Description from './pages/Project/Description.vue'
import Design from './pages/Project/Design.vue'
import Results from './pages/Project/Results.vue'
import Modeling from './pages/Modeling/Modeling.vue'
import BiologyFestival from './pages/HumanPractice/BiologyFestival.vue'
import Ethics from './pages/HumanPractice/Ethics.vue'
import HPccic from './pages/HumanPractice/HP-ccic.vue'
import PEccic from './pages/HumanPractice/PE-ccic.vue'
import Safety from './pages/HumanPractice/Safety.vue'
import LabNotes from './pages/Notebook/LabNotes.vue'
import Protocols from './pages/Notebook/Protocols.vue'
import Interlab from './pages/Notebook/Interlab.vue'
import Parts from './pages/Parts/Parts.vue'
import Team from './pages/Team/Team.vue'


const routes = [
	{path: '/', redirect: '/Overview'},
	{path: '/Overview', component: Overview},
	{path: '/Description', component: Description},
	{path: '/Design', component: Design},
	{path: '/Results', component: Results},
	{path: '/Modeling', component: Modeling},
	{path: '/BiologyFestival', component: BiologyFestival},
	{path: '/Ethics', component: Ethics},
	{path: '/HP-ccic', component: HPccic},
	{path: '/PE-ccic', component: PEccic},
	{path: '/Safety', component: Safety},
	{path: '/LabNotes', component: LabNotes},
	{path: '/Protocols', component: Protocols},
	{path: '/Interlab', component: Interlab},
	{path: '/Parts', component: Parts},
	{path: '/Team', component: Team}
]

export default routes;