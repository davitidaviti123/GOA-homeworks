function isTeenager(age,hasPermission){
    if (age < 18){
        hasPermission = false
    }
    if (age > 18){
        hasPermission = true
    }
    if (hasPermission && age > 18){
        return true
    }
    else{
        return false
    }
}
isTeenager(12)