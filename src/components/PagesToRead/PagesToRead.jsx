
const PagesToRead = () => {
    return (
        <div>
           <div role="tablist" className="tabs tabs-lifted">
  <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Tab 1" checked />
  <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">Tab content 1</div>

  <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Tab 2" />
  <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">Tab content 2</div>
 
 
</div> 
        </div>
    );
};

export default PagesToRead;