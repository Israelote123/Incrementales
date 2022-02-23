const sequelize = require('../db/conexion')

//obtener solicitudes de amistad
module.exports.solicitudAmistad = async (data) => {
    let result = await sequelize.query(`SELECT * FROM friends where status='pendiente' AND receptor='${data}'`)
    return result
}

//manda solicitudes de amistad
module.exports.requestt = async(friend) => {
    await sequelize.query(`INSERT INTO friends (receptor,emisor,status) VALUES ('${friend.receptor}', '${friend.emisor}','${friend.status}')`)
     return "friend request sent";   
}

//actualizar solicitud de amistad
module.exports.updatee= async(actualizar) => {
    if(actualizar.status=="rechazado")
    {
        await sequelize.query(`UPDATE friends SET status='${actualizar.status}' WHERE receptor='${actualizar.receptor}' AND emisor='${actualizar.emisor}'`)
        return 'Reject solicitud'
    }
    else if(actualizar.status=="amigo"){
        await sequelize.query(`UPDATE friends SET status='${actualizar.status}' WHERE receptor='${actualizar.receptor}' AND emisor='${actualizar.emisor}'`)  
        return `'${actualizar.name}' and you are already friends`; 
    }
    else if(actualizar.status=="cancel") {
        await sequelize.query(`DELETE FROM friends  WHERE receptor='${actualizar.receptor}' AND emisor='${actualizar.emisor}'`)  
        return `request cancel `; 
    }
    else{
        await sequelize.query(`UPDATE friends SET status='${actualizar.status}' WHERE receptor='${actualizar.receptor}' AND emisor='${actualizar.emisor}'`)  
        return `'${actualizar.name}' and you are no longer friends `; 
    }
     
}
//obtener solicitudes de amistad
module.exports.solicitudFriend = async (data) => {
    let result = await sequelize.query(`SELECT * FROM register LEFT JOIN friends ON mail=emisor  WHERE receptor='${data}' AND status='pendiente' `)
    return result
}

//obtener amigos
module.exports.friends= async (data) => {

    let result = await sequelize.query(`SELECT * FROM register LEFT JOIN friends ON mail=emisor  WHERE receptor='${data}' AND status='amigo' `)
    return result
}
//obtener noamigos para desc
module.exports.noFriends= async (data) => {
    let result = await sequelize.query(`SELECT * 
                                        FROM register R 
                                        LEFT JOIN friends F 
                                        ON R.mail=F.emisor 
                                        WHERE ((status IS NULL OR status='pendiente') AND NOT mail='${data}')
                                        OR        
                                        (NOT mail='${data}' AND status IS NULL) 
                                        AND NOT
                                        ((NOT status='pendiente' OR NOT status='amigo') AND ( receptor='${data}' OR emisor='${data}') )  
                                    `)
    return result
}
