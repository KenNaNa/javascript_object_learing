// java代码
public abstract class Component{
	// add
	public void add(Component child){};
	// remove
	public void remove(Component child){};
}

public class Composite extends Component{
	// add
	public void add(Component child){};
	// remove
	public void remove(Component child){};
}


public class Leaf extends Component{
	public void add(Component child){
		throw new UnsupportedOperationException();
	}

	public void remove(Component child){
		
	}
}