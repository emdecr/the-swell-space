<?php 
// Creates new endpoint to get records by tag
// URL: /wp-json/records/v1/tag/[ID]
class get_records_by_tag_custom_route extends WP_REST_Controller {

	/**
	 * Register the routes for the objects of the controller.
	 */
	public function register_routes() {
		$version = '1';
		$namespace = 'records/v' . $version;
		$base = 'tag';
        register_rest_route( $namespace, '/' . $base . '/(?P<id>[\d]+)', array(
			array(
				'methods'         => WP_REST_Server::READABLE,
				'callback'        => array( $this, 'get_records_by_tag' ),
				'permission_callback' => array( $this, 'get_records_by_tag_permissions_check' ),
				'args' => array(
                    'id' => array(
                      'validate_callback' => function($param, $request, $key) {
                        return is_numeric( $param );
                      }
                    ),
                ),
			),
		) );
	}
    
    /**
	 * Get records by tag
	 *
	 * @param WP_REST_Request $request Full data about the request.
	 * @return WP_Error|WP_REST_Response
	 */
	public function get_records_by_tag( $request ) {

        // global $wpdb;
        $payload = $request->get_params();
		$id = $request['id'];
		
		$args = array(
            'tag_id' => $id
		);

		$records = new WP_Query( $args );
		
		if (empty($posts)) {
			return new WP_Error( 'empty_tag', 'There are no records with this tag.', array('status' => 404) );

		}

		return new WP_REST_Response( $records, 200 );
	}


	/**
	 * Check if a given request has auth
	 *
	 * @param WP_REST_Request $request Full data about the request.
	 * @return WP_Error|bool
	 */
	public function get_records_by_tag_permissions_check( $request ) {
		// Public for now
		return true;
	}

}

/**
 * Function to register our new routes from the controller.
 */
function register_get_records_by_tag_controller() {
	$controller = new get_records_by_tag_custom_route();
	$controller->register_routes();
}
add_action( 'rest_api_init', 'register_get_records_by_tag_controller' );
?>