import Vue from 'vue'
import Router from 'vue-router'
import Enter from '@/components/Enter'
import Report from '@/components/Report'
import Lending from '@/components/Lending'
import Status from '@/components/Status'
import Tool from '@/components/Tool'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Status',
      name: 'Status',
      component: Status
    },
    {
      path: '/Report',
      name: 'Report',
      component: Report
    },
    {
      path: '/Lending',
      name: 'Lending',
      component: Lending
    },
    {
      path: '/Tool',
      name: 'Tool',
      component: Tool
    },
    {
      path: '/Report',
      name: 'Report',
      component: Report
    },
    {
      path: '/Enter',
      name: 'Enter',
      component: Enter
    }
  ]
})
