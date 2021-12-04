const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const reactionSchema = new Schema({
reactionId: {
    type: Schema.Types.ObjectId,
    default: ()=> new Types.ObjectId()
},
reactionBody:{
    
},
username:{

},
createAt:{

}

},
{
    toJSON:{
        getters: true
    },
    id: false
}
)

module.exports =  reactionSchema;