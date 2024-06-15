<form onSubmit={handleSubmit}>
    <input
    
    onChange={handleInputChange}
    value={trackingId}
    
    type="text" class="bg-gray-900 text-white p-0.5 outline-none ml-2 max-w-sm" placeholder="Tracking ID"/>
    {error && <p style={{ color: 'red' }}>{error}</p>}
      {details && (
        <div className=' text-center mt-10 gap-9 p-5'>
          <h1>Status of Delivery</h1>
          <h2>Tracking Details</h2>
          <p><strong>Status:</strong> {details.status}</p>
          <p><strong>Status:</strong> {details.vial}</p>
          <p><strong>Estimated Delivery:</strong> {details.estimatedDelivery}</p>
          <p><strong>Location:</strong> {details.location}</p>
        </div>
      )}
    </form>
