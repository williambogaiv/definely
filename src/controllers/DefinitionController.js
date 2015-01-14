import Controller from './Controller'

export default class DefinitionController extends Controller {
	constructor(router)
	{
		super(router, '/asdf')
		this.get('/', this.index)
	}
	
	index(request, reply) {
		reply.view('definitionList') 
	}
	
}