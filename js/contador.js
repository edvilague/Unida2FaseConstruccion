function setVisitasPost($post_ID) {
    $key = 'post_views_count';
    $count = get_post_meta($post_ID, $key , true);
    if($count==''){
        $count = 0;
        delete_post_meta($post_ID, $key );
        add_post_meta($post_ID, $key , '0');
    }else{
        $count++;
        update_post_meta($post_ID, $key , $count);
    }
}

//Esta es la función que se encarga de devolver la cantidad de visitas

function getVisitasPost($post_ID){
    $key = 'post_views_count';
    $count = get_post_meta($post_ID, $key , true);
    if($count==' '){
        delete_post_meta($post_ID, $key );
        add_post_meta($post_ID, $key , '0');
        return "0 Visitas";
    }
    return $count.' Visitas';
}