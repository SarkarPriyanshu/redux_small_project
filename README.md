# redux_small_project
small redux project for my own practise

Redux in a Simple Way

Action Creator: Nothing but a function that returns a object

Action: The object that is returned by action creator 
				this action containes a pair of keys called "Type" and "payload"
				type defines to which reducer this action belongs to
				Payload defines the data or some asset on which this action needs to be executed
				
Reducers: Reducer is a function that have two parameters
					First is the store initial state 
					Second is the action 

Store/State : Store is a central store which gives a dispatch function
							this dispatch function triggers the action that send to all reducers 
							reducers check to which reducer the action belongs to 
							execute the related action and then update the state of the store
				


